// const express = require("express");
// const { Router } = express;
// const FormDataModel = require("../models/model2");
// const dotenv = require("dotenv");
// const cloudinary = require("cloudinary").v2;
// const multer = require("multer");

// const router = Router();

// // Configure multer to handle multiple file uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // this is for the student certificates data
// router.post(
//   "/",
//   upload.fields([
//     // { competition: "file1" },
//     // { prjPresent: "file2" },
//     // { paperPresent: "file3" },
//     // { course: "file4" },
//     // { copyright: "file5" },
//     // { internship: "file8" },
//     // { certification: "file7" },

//     { file1: "file1" },
//     { file2: "file2" },
//     { file3: "file3" },
//     { file4: "file4" },
//     { file5: "file5" },
//     { file8: "file8" },
//     { file7: "file7" },
//   ]),
//   async (req, res) => {
//     try {
//       const uploadedFiles = req.files;

//       // Handle the uploaded files here (e.g., save, process, etc.)
//       // For this example, just send a response with the file details.
//       const fileDetails = {};

//       for (const key in uploadedFiles) {
//         if (uploadedFiles.hasOwnProperty(key)) {
//           const fileArray = uploadedFiles[key];
//           fileDetails[key] = fileArray.map((file) => ({
//             originalname: file.originalname,
//             size: file.size,
//           }));
//         }
//       }

//       // const {
//       //   competition,
//       //   prjPresent,
//       //   paperPresent,
//       //   course,
//       //   copyright,
//       //   internship,
//       //   certification,
//       // } = req.body;

//       // const competitionUrl = await cloudinary.uploader.upload(competition);
//       // const prjPresentUrl = await cloudinary.uploader.upload(prjPresent);
//       // const paperPresentUrl = await cloudinary.uploader.upload(paperPresent);
//       // const courseUrl = await cloudinary.uploader.upload(course);
//       // const copyrightUrl = await cloudinary.uploader.upload(copyright);
//       // const internshipUrl = await cloudinary.uploader.upload(internship);
//       // const certificationUrl = await cloudinary.uploader.upload(certification);

//       // // SAVE ON MONGO DB
//       // const FormData = new FormDataModel({
//       //   competition: competitionUrl.url,
//       //   prjPresent: prjPresentUrl.url,
//       //   paperPresent: paperPresentUrl.url,
//       //   course: courseUrl.url,
//       //   copyright: copyrightUrl.url,
//       //   internship: internshipUrl.url,
//       //   certification: certificationUrl.url,
//       // });
//       // await FormData.save();

//       res.status(200).json({ success: true, data: FormData });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ success: false, message: error });
//     }
//   }
// );

// module.exports = router;

let express = require("express"),
  multer = require("multer"),
  mongoose = require("mongoose"),
  router = express.Router();

// LOCAL STORAGE
const DIR = "./public/";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, "-" + fileName);
  },
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});
// User model
let User = require("../models/userModel");
router.post("/", upload.single("competition"), (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    profileImg: url + "/public/" + req.file.filename,
  });
  user
    .save()
    .then((result) => {
      res.status(201).json({
        message: "User registered successfully!",
        userCreated: {
          _id: result._id,
          profileImg: result.profileImg,
        },
      });
    })
    .catch((err) => {
      console.log(err),
        res.status(500).json({
          error: err,
        });
    });
});
router.get("/", (req, res, next) => {
  User.find().then((data) => {
    res.status(200).json({
      message: "User list retrieved successfully!",
      users: data,
    });
  });
});
module.exports = router;
