const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const mongoose = require("mongoose");
const { Router } = express;
const FormDataModel = require("../models/model2");

const router = Router();

// Configure Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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
  (req, res) => {
    // Handle file uploads and store the files
    // You can use req.files to access the uploaded files

    // Example: Save the files to a folder (adjust the path as needed)
    const competitionFile = req.files["competition"][0];
    console.log(competitionFile);
    // const prjPresentFile = req.files['prjPresent'][0];
    // ...

    // Return a response indicating success or failure
    res.status(200).json({ message: "Files uploaded successfully" });
  }
);

module.exports = router;
