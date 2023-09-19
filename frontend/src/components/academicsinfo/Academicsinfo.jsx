import React, { useState } from "react";
import axios from "axios";
import "./Academicsinfo.modules.css";

function FilesUploadComponent() {
  const [loading, setLoading] = useState(false);

  const [competition, setCompetition] = useState(null);
  const [prjPresent, setPrjPresent] = useState(null);
  const [paperPresent, setPaperPresent] = useState(null);
  const [course, setCourse] = useState(null);
  const [copyright, setCopyright] = useState(null);
  const [internship, setInternship] = useState(null);
  const [certification, setCertification] = useState(null);

  const handleFileChange = (e) => {
    setCompetition(e.target.files[0]);
    setPrjPresent(e.target.files[1]);
    setPaperPresent(e.target.files[2]);
    setCourse(e.target.files[3]);
    setCopyright(e.target.files[4]);
    setInternship(e.target.files[5]);
    setCertification(e.target.files[6]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("competition", competition);
    // formData.append("prjPresent", prjPresent);
    // formData.append("paperPresent", paperPresent);
    // formData.append("course", course);
    // formData.append("copyright", copyright);
    // formData.append("internship", internship);
    // formData.append("certification", certification);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/academic-form",
        formData,
        {}
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="container">
    //   <div className="row">
    //     <form onSubmit={onSubmit}>
    //       <div className="form-group">
    //         <input type="file" onChange={onFileChange} />
    //       </div>
    //       <div className="form-group">
    //         <button className="btn btn-primary" type="submit">
    //           Upload
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
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
                // required
              />
            </div>
            <div class="input__box">
              <span class="details">Paper Presentation _</span>
              <input
                onChange={handleFileChange}
                type="file"
                name="paperPresent"
                // required
              />
            </div>
            <div class="input__box">
              <span class="details">Online Course _</span>
              <input
                onChange={handleFileChange}
                type="file"
                name="course"
                // required
              />
            </div>
            <div class="input__box">
              <span class="details">Copyright _</span>
              <input
                onChange={handleFileChange}
                type="file"
                name="copyright"
                // required
              />
            </div>
            <div class="input__box">
              <span class="details">Internship _</span>
              <input
                onChange={handleFileChange}
                type="file"
                name="internship"
                // required
              />
            </div>
            <div class="input__box">
              <span class="details">Certification \*</span>
              <input
                onChange={handleFileChange}
                type="file"
                name="certification"
                // required
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
}

export default FilesUploadComponent;
