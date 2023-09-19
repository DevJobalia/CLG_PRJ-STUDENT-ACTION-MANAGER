const express = require("express");
const { Router } = express;
const { FormData } = require("../models/model1");

const router = Router();

// Create a route to handle form submissions
router.post("/", async (req, res) => {
  try {
    // Create a new document based on the FormData model
    const formData = new FormData(req.body);
    // Save the document to the database using async/await
    await formData.save();
    res.status(200).send("Form data saved successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error saving form data to the database");
  }
});

module.exports = router;
