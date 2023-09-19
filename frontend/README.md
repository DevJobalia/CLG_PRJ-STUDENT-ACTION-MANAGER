[IMP LINK FOR FILE UPLOAD](https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/)

```bash
npm i axios
```

import React, { useState } from "react";
import "./Academicsinfo.modules.css";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const Academicsinfo = () => {
// const navigate = useNavigate();
const [loading, setLoading] = useState(false);
const [files, setFiles] = useState({});

const handleFileChange = (event) => {
const selectedFiles = event.target.files;
const updatedFiles = { ...files };

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      updatedFiles[`file${i + 1}`] = file;
    }

    setFiles(updatedFiles);

};

const handleSubmit = async (e) => {
e.preventDefault();
setLoading(true);
if (Object.keys(files).length === 0) {
alert("Please select one or more files");
return;
}

    const formData = new FormData();
    for (const key in files) {
      formData.append(key, files[key]);
    }
    try {
      const response = await fetch("http://localhost:5000/api/academic-form", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          // 'Authorization': 'Bearer your_access_token',
          // Add other headers as needed
        },
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Uploaded:", data);
        // Handle the server's response as needed
      } else {
        console.error("Upload failed");
      }
      console.log(files);
      await response.json();
      // navigate("/");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }

};

return (

<div class="body">
<div class="container">
<div class="title">Registration</div>
<form onSubmit={handleSubmit}>
<div class="user__details">
<div class="input__box">
<span class="details">Participate/OrganizeCompetition*</span>
<input
                onChange={handleFileChange}
                type="file"
                name="competition"
                required
              />
</div>
<div class="input__box">
<span class="details">Project Presentation *</span>
<input
                onChange={handleFileChange}
                type="file"
                name="prjPresent"
                required
              />
</div>
<div class="input__box">
<span class="details">Paper Presentation _</span>
<input
                onChange={handleFileChange}
                type="file"
                name="paperPresent"
                required
              />
</div>
<div class="input__box">
<span class="details">Online Course _</span>
<input
                onChange={handleFileChange}
                type="file"
                name="course"
                required
              />
</div>
<div class="input__box">
<span class="details">Copyright _</span>
<input
                onChange={handleFileChange}
                type="file"
                name="copyright"
                required
              />
</div>
<div class="input__box">
<span class="details">Internship _</span>
<input
                onChange={handleFileChange}
                type="file"
                name="internship"
                required
              />
</div>
<div class="input__box">
<span class="details">Certification \*</span>
<input
                onChange={handleFileChange}
                type="file"
                name="certification"
                required
              />
</div>
</div>
<button type="submit" class="button">
{loading ? "Saving.." : "Submit"}
</button>
<a href="login.html">Already a member? Log In</a>
</form>
</div>
</div>
);
};

export default Academicsinfo;
