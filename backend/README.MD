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
