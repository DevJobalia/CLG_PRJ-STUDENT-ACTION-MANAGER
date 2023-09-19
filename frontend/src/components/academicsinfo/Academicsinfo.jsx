import React, { useState } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(e) => handleFileChange(e, "competition")}
        />
        <input
          type="file"
          onChange={(e) => handleFileChange(e, "prjPresent")}
        />
        <input
          type="file"
          onChange={(e) => handleFileChange(e, "paperPresent")}
        />
        <input type="file" onChange={(e) => handleFileChange(e, "course")} />
        <input type="file" onChange={(e) => handleFileChange(e, "copyright")} />
        <input
          type="file"
          onChange={(e) => handleFileChange(e, "internship")}
        />
        <input
          type="file"
          onChange={(e) => handleFileChange(e, "certification")}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default FileUploadForm;
