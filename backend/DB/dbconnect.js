// /the database connection code
const mongoose = require("mongoose");

// Define a function to connect to the MongoDB database
async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/Personalinfo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    // Handle MongoDB connection error here
  }
}

module.exports = {
  connectToDatabase,
};
