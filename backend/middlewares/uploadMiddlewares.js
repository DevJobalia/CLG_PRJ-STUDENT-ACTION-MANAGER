const multer = require("multer");

// LOCAL STORAGE SETUP
const DIR = "./public/";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, fileName);
  },
});

//                                      Configure multer storage and file name
// Create multer upload instance
const upload = multer({ storage: storage });

// // MONGO DB model AND SAVING
// const cpUpload = upload.fields([
//   { competition: "competition", maxCount: 1 },
//   { prjPresent: "prjPresent", maxCount: 1 },
//   { paperPresent: "paperPresent", maxCount: 1 },
//   { course: "course", maxCount: 1 },
//   { copyright: "copyright", maxCount: 1 },
//   { internship: "internship", maxCount: 1 },
//   { certification: "certification", maxCount: 1 },
// ]);

// Custom file upload middleware
const uploadMiddleware = (req, res, next) => {
  // Use multer upload instance
  upload.array("files")(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    // Retrieve uploaded files
    const files = req.files;
    const errors = [];

    // Validate file types and sizes
    files.forEach((file) => {
      const allowedTypes = ["image/jpeg", "image/png"];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!allowedTypes.includes(file.mimetype)) {
        errors.push(`Invalid file type: ${file.originalname}`);
      }

      if (file.size > maxSize) {
        errors.push(`File too large: ${file.originalname}`);
      }
    });

    // Handle validation errors
    if (errors.length > 0) {
      // Remove uploaded files
      files.forEach((file) => {
        fs.unlinkSync(file.path);
      });

      return res.status(400).json({ errors });
    }

    // Attach files to the request object
    req.files = files;

    // Proceed to the next middleware or route handler
    next();
  });
};

module.exports = uploadMiddleware;
