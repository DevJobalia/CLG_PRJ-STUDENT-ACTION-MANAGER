//   for student data form
const mongoose = require("mongoose");

// Define a MongoDB schema and model for the form data

// this is for the student form data
const formDataSchema = new mongoose.Schema({
    class: {
      type: String,
      required: true,
    },
    rollNo: {
      type: Number,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    fatherEmail: {
      type: String,
      required: true,
    },
    fatherMobileNumber: {
      type: Number,
      required: true,
    },
    fatherQualification: {
      type: String,
      required: true,
    },
    fatherDesignation: {
      type: String,
      required: true,
    },
    fatherWorkingPlace: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    motherEmail: {
      type: String,
      required: true,
    },
    motherMobileNumber: {
      type: Number,
      required: true,
    },
    motherQualification: {
      type: String,
      required: true,
    },
    motherDesignation: {
      type: String,
      required: true,
    },
    motherWorkingPlace: {
      type: String,
      required: true,
    },
  });
  
  const FormData = mongoose.model("FormData", formDataSchema);

  module.exports={
    FormData,
};