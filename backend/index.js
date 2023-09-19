// Import necessary libraries
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const { connectToDatabase } = require("./DB/dbconnect"); // Import the connectToDatabase function

const academicForm = require("./routes/academicForm");
const personalInfoForm = require("./routes/personalInfoForm");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/api/academic-form", academicForm);
app.use("/api/submit-form", personalInfoForm);

const port = process.env.PORT || 5000;
// Start the Express.js server
app.listen(port, () => {
  try {
    connectToDatabase();
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.log(error);
  }
});
