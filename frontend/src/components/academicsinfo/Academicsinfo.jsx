import React, { useState } from "react";
import ImageGallery from "./retrieve";
import "./Academicsinfo.modules.css";

function FileUploadForm() {
  const [files, setFiles] = useState({
    competition: null,
    prjPresent: null,
    paperPresent: null,
    course: null,
    copyright: null,
    internship: null,
    certification: null,
  });

  const handleFileChange = (e, field) => {
    const newFiles = { ...files };
    newFiles[field] = e.target.files[0];
    setFiles(newFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (const key in files) {
      if (files[key]) {
        formData.append(key, files[key]);
      }
    }

    try {
      const response = await fetch("http://localhost:5000/api/academic-form", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Handle success
        console.log("Files uploaded successfully");
      } else {
        // Handle error
        console.error("Error uploading files");
      }
    } catch (error) {
      // Handle network error
      console.error("Network error:", error);
    }
  };

  return (
    <div class="body">
      <div class="container">
        <div class="title">Registration</div>
        <form onSubmit={handleSubmit}>
          <div class="user__details">
            <div class="input__box">
              <span class="details">Name *</span>
              <input
                type="text"
                onChange={(e) => handleFileChange(e, "competition")}
              />
            </div>
            <div class="input__box">
              <span class="details">Roll No *</span>
              <input
                type="text"
                onChange={(e) => handleFileChange(e, "competition")}
              />
            </div>
            <div class="input__box">
              <span class="details">Division *</span>
              <input
                type="text"
                onChange={(e) => handleFileChange(e, "competition")}
              />
            </div>
            <div class="input__box">
              <span class="details">Participate/OrganizeCompetition *</span>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "competition")}
              />
            </div>

            <div class="input__box">
              <span class="details">Project Presentation *</span>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "prjPresent")}
              />
            </div>

            <div class="input__box">
              <span class="details">Paper Presentation *</span>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "paperPresent")}
              />
            </div>

            <div class="input__box">
              <span class="details">Online Course *</span>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "course")}
              />
            </div>

            <div class="input__box">
              <span class="details">Copyright *</span>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "copyright")}
              />
            </div>

            <div class="input__box">
              <span class="details">Internship *</span>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "internship")}
              />
            </div>

            <div class="input__box">
              <span class="details">Certification *</span>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "certification")}
              />
            </div>
          </div>
          <button type="submit" class="button">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default FileUploadForm;
