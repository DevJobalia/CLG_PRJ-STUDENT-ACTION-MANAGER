//   for student data form
const mongoose = require("mongoose");

// Define a MongoDB schema and model for the form data

// this is for the student form data
const formDataSchema = new mongoose.Schema({
  userId: {
    type: Number,
    default: 45,
  },
  competition: {
    type: String,
    required: true,
  },
  prjPresent: {
    type: String,
    // required: true,
  },
  paperPresent: {
    type: String,
    // required: true,
  },
  course: {
    type: String,
    // required: true,
  },
  copyright: {
    type: String,
    // required: true,
  },
  internship: {
    type: String,
    // required: true,
  },
  certification: {
    type: String,
    // required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const FormDataModel = mongoose.model("AcademicFormData", formDataSchema);

module.exports = FormDataModel;
