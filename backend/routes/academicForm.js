const express = require("express");
const multer = require("multer");
const { Router } = express;
const FormDataModel = require("../models/model2");
// get path
const { dirname, join } = require("path");
const fs = require("fs");

const router = Router();

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
    const competitionFile = req.files["competition"][0];
    const prjPresentFile = req.files["prjPresent"][0];
    const paperPresentFile = req.files["paperPresent"][0];
    const courseFile = req.files["course"][0];
    const copyrightFile = req.files["copyright"][0];
    const internshipFile = req.files["internship"][0];
    const certificationFile = req.files["certification"][0];

    console.log(saveDir + "" + competitionFile.filename);

    const newData = FormDataModel({
      competition: saveDir + competitionFile.filename,
      prjPresent: saveDir + prjPresentFile.filename,
      paperPresent: saveDir + paperPresentFile.filename,
      course: saveDir + courseFile.filename,
      copyright: saveDir + copyrightFile.filename,
      internship: saveDir + internshipFile.filename,
      certification: saveDir + certificationFile.filename,
    });

    await newData.save();

    res.status(200).json({ message: "Files uploaded successfully" });
  }
);

module.exports = router;
