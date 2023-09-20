const express = require("express");
const multer = require("multer");
const { Router } = express;
const FormDataModel = require("../models/model2");
// get path
const { dirname, join } = require("path");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;

require("dotenv").config();

const router = Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// const __filename = fileURLToPath(import.meta.url);
const appDir = dirname(require.main.filename);

const saveDir = join(appDir, "public/");

// Create the destination directory if it doesn't exist
if (!fs.existsSync(saveDir)) {
  fs.mkdirSync(saveDir, { recursive: true });
}
console.log(saveDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, saveDir);
  },
  filename: (req, file, cb) => {
    const uniqueFileName =
      Date.now() + "-" + file.originalname.toLowerCase().split(" ").join("-");
    // const fileName =
    //   uniqueFileName + ;

    cb(null, uniqueFileName);
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
// Handle file uploads
router.post(
  "/",
  upload.fields([
    { name: "competition" },
    { name: "prjPresent" },
    { name: "paperPresent" },
    { name: "course" },
    { name: "copyright" },
    { name: "internship" },
    { name: "certification" },
  ]),
  async (req, res) => {
    try {
      const competitionFile = req.files["competition"][0];
      const prjPresentFile = req.files["prjPresent"][0];
      const paperPresentFile = req.files["paperPresent"][0];
      const courseFile = req.files["course"][0];
      const copyrightFile = req.files["copyright"][0];
      const internshipFile = req.files["internship"][0];
      const certificationFile = req.files["certification"][0];

      // Upload files to Cloudinary
      const competitionUpload = await cloudinary.uploader.upload(
        competitionFile.path
      );
      const prjPresentUpload = await cloudinary.uploader.upload(
        prjPresentFile.path
      );
      const paperPresentUpload = await cloudinary.uploader.upload(
        paperPresentFile.path
      );
      const courseUpload = await cloudinary.uploader.upload(courseFile.path);
      const copyrightUpload = await cloudinary.uploader.upload(
        copyrightFile.path
      );
      const internshipUpload = await cloudinary.uploader.upload(
        internshipFile.path
      );
      const certificationUpload = await cloudinary.uploader.upload(
        certificationFile.path
      );

      // Create a new FormDataModel with Cloudinary URLs
      const newData = FormDataModel({
        competition: competitionUpload.secure_url,
        prjPresent: prjPresentUpload.secure_url,
        paperPresent: paperPresentUpload.secure_url,
        course: courseUpload.secure_url,
        copyright: copyrightUpload.secure_url,
        internship: internshipUpload.secure_url,
        certification: certificationUpload.secure_url,
      });

      await newData.save();

      // Delete temporary uploaded files (if needed)
      // fs.unlinkSync(competitionFile.path);
      // fs.unlinkSync(prjPresentFile.path);
      // fs.unlinkSync(paperPresentFile.path);
      // fs.unlinkSync(courseFile.path);
      // fs.unlinkSync(copyrightFile.path);
      // fs.unlinkSync(internshipFile.path);
      // fs.unlinkSync(certificationFile.path);

      res.status(200).json({ message: "Files uploaded successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error uploading files" });
    }
  }
);

router.get("/:id", async (req, res) => {
  try {
    const formData = await FormDataModel.findById(req.params.id);

    if (!formData) {
      return res
        .status(404)
        .json({ success: false, message: "Form data not found" });
    }

    // You can access the Cloudinary URLs from the formData object
    const {
      competition,
      prjPresent,
      paperPresent,
      course,
      copyright,
      internship,
      certification,
    } = formData;

    // Return the Cloudinary URLs to the client
    res.status(200).json({
      success: true,
      data: {
        competition,
        prjPresent,
        paperPresent,
        course,
        copyright,
        internship,
        certification,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Error retrieving images" });
  }
});

module.exports = router;
