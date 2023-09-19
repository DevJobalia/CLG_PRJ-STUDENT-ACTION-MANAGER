```bash
npm i express mongoose body-parser cors nodemon
npm i cors dotenv cloudinary
npm i multer
```

// UPLOAD TO CLOUDINARY, THEN GET ITS URL TO ACCESS
// const competitionUrl = await cloudinary.uploader.upload(competition);
// const prjPresentUrl = await cloudinary.uploader.upload(prjPresent);
// const paperPresentUrl = await cloudinary.uploader.upload(paperPresent);
// const courseUrl = await cloudinary.uploader.upload(course);
// const copyrightUrl = await cloudinary.uploader.upload(copyright);
// const internshipUrl = await cloudinary.uploader.upload(internship);
// const certificationUrl = await cloudinary.uploader.upload(certification);
console.log(
competition,
prjPresent,
paperPresent,
course,
copyright,
internship,
certification
);

// competition: competitionUrl.url,
// prjPresent: prjPresentUrl.url,
// paperPresent: paperPresentUrl.url,
// course: courseUrl.url,
// copyright: copyrightUrl.url,
// internship: internshipUrl.url,
// certification: certificationUrl.url,
// req.body

// const url = req.protocol + "://" + req.get("host");
// const newAcademicForm = new FormDataModel({
// // \_id: new mongoose.Types.ObjectId(),
// // name: req.body.name,
// // profileImg: url + "/public/" + req.file.filename,
// competition: url + "/public/" + req.file.competition,
// prjPresent: url + "/public/" + req.file.prjPresent,
// paperPresent: url + "/public/" + req.file.paperPresent,
// course: url + "/public/" + req.file.course,
// copyright: url + "/public/" + req.file.copyright,
// internship: url + "/public/" + req.file.internship,
// certification: url + "/public/" + req.file.certification,
// });

// newAcademicForm
// .save()
// .then((result) => {
// res.status(201).json({
// message: "User registered successfully!",
// userCreated: {
// \_id: result.\_id,
// profileImg: result.profileImg,
// },
// });
// })
// .catch((err) => {
// console.log(err),
// res.status(500).json({
// error: err,
// });
// });
// Handle the uploaded files
console.log(req.files);
// const files = req.files;

// // Process and store the files as required
// // For example, save the files to a specific directory using fs module
// files.forEach((file) => {
// const filePath = `uploads/${file.filename}`;
// fs.rename(file.path, filePath, (err) => {
// if (err) {
// // Handle error appropriately and send an error response
// return res.status(500).json({ error: "Failed to store the file" });
// }
// });
// });

// Send an appropriate response to the client
