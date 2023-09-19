import React from 'react'

const Personalinfo = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Get form elements
    const form = e.target;
    
    // Validate all fields
    const errors = {};

    //Extract form Data
    const formData = {
      class: form.querySelector('#class').value,
      rollNo: form.querySelector('#rollNo').value,
      fullName: form.querySelector('#fullName').value,
      address: form.querySelector('#address').value,
      email: form.querySelector('#email').value,
      mobileNumber: form.querySelector('#mobileNumber').value,
      fatherName: form.querySelector('#fatherName').value,
      fatherEmail: form.querySelector('#fatherEmail').value,
      fatherMobileNumber: form.querySelector('#fatherMobileNumber').value,
      fatherQualification: form.querySelector('#fatherQualification').value,
      fatherDesignation: form.querySelector('#fatherDesignation').value,
      fatherWorkingPlace: form.querySelector('#fatherWorkingPlace').value,
      motherName: form.querySelector('#motherName').value,
      motherEmail: form.querySelector('#motherEmail').value,
      motherMobileNumber: form.querySelector('#motherMobileNumber').value,
      motherQualification: form.querySelector('#motherQualification').value,
      motherDesignation: form.querySelector('#motherDesignation').value,
      motherWorkingPlace: form.querySelector('#motherWorkingPlace').value,
      // Add other form fields in the same way
    };

    // Check if any field is empty
    const requiredFields = [
      'class',
      'rollNo',
      'fullName',
      'address',
      'email',
      'mobileNumber',
      'fatherName',
      'fatherEmail',
      'fatherMobileNumber',
      'fatherQualification',
      'fatherDesignation',
      'fatherWorkingPlace',
      'motherName',
      'motherEmail',
      'motherMobileNumber',
      'motherQualification',
      'motherDesignation',
      'motherWorkingPlace'
    ];

    requiredFields.forEach((fieldName) => {
      if (!form[fieldName].value.trim()) {
        errors[fieldName] = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      }
    });

    // Validate email addresses
    const emailFields = ['email', 'fatherEmail', 'motherEmail'];
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    emailFields.forEach((fieldName) => {
      if (!emailPattern.test(form[fieldName].value)) {
        errors[fieldName] = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is not a valid email address`;
      }
    });

    // Validate mobile numbers
    const mobileFields = ['mobileNumber', 'fatherMobileNumber', 'motherMobileNumber'];
    const mobileNumberPattern = /^\d{10}$/;
    mobileFields.forEach((fieldName) => {
      if (!mobileNumberPattern.test(form[fieldName].value)) {
        errors[fieldName] = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} should contain 10 digits only`;
      }
    });

    

    // If there are errors, display them
    if (Object.keys(errors).length > 0) {
      alert('Please correct the following errors:\n' + Object.values(errors).join('\n'));
    } else {
             // Your asynchronous operations here
        // For example, making an API request
        fetch('http://localhost:5000/api/submit-form', {
          method: 'POST',
          body: JSON.stringify(formData), // Make sure formData is defined
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          if (response.ok) {
            console.log('Form submitted successfully');
          } else {
            console.error('Error:', response.statusText);
          }
        })
        .catch((error) => {
          // Handle errors
          console.error('Error:', error);
        });
    }
  };

  return (
    <div>
      <h1>This is personal info form</h1>
      <form id="studentForm" action="#" method="post" onSubmit={handleSubmit}>
        {/* <!-- Class --> */}
        <div>
          <label for="class">Class:</label>
          <input type="text" id="class" name="class" required />
        </div>

        {/* <!-- Roll No --> */}
        <div>
          <label for="rollNo">Roll No:</label>
          <input type="number" id="rollNo" name="rollNo" required />
        </div>

        {/* <!-- Student Full Name --> */}
        <div>
          <label for="fullName">Student Full Name:</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>

        {/* <!-- Student Address --> */}
        <div>
          <label for="address">Student Address:</label>
          <textarea id="address" name="address" required></textarea>
        </div>

        {/* <!-- Student Email --> */}
        <div>
          <label for="email">Student Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        {/* <!-- Student Mobile Number --> */}
        <div>
          <label for="mobileNumber">Student Mobile Number:</label>
          <input type="tel" id="mobileNumber" name="mobileNumber" required />
        </div>

        {/* <!-- Father's Name --> */}
        <div>
          <label for="fatherName">Father's Name:</label>
          <input type="text" id="fatherName" name="fatherName" required />
        </div>

        {/* <!-- Father's Email --> */}
        <div>
          <label for="fatherEmail">Father's Email:</label>
          <input type="email" id="fatherEmail" name="fatherEmail" required />
        </div>

        {/* <!-- Father's Mobile Number --> */}
        <div>
          <label for="fatherMobileNumber">Father's Mobile Number:</label>
          <input type="tel" id="fatherMobileNumber" name="fatherMobileNumber" required />
        </div>

        {/* <!-- Father's Qualification --> */}
        <div>
          <label for="fatherQualification">Father's Qualification:</label>
          <input type="text" id="fatherQualification" name="fatherQualification" required />
        </div>

        {/* <!-- Father's Designation --> */}
        <div>
          <label for="fatherDesignation">Father's Designation:</label>
          <input type="text" id="fatherDesignation" name="fatherDesignation" required />
        </div>

        {/* <!-- Father's Working Place --> */}
        <div>
          <label for="fatherWorkingPlace">Father's Working Place:</label>
          <input type="text" id="fatherWorkingPlace" name="fatherWorkingPlace" required />
        </div>

        {/* <!-- Mother's Name --> */}
        <div>
          <label for="motherName">Mother's Name:</label>
          <input type="text" id="motherName" name="motherName" required />
        </div>

        {/* <!-- Mother's Email --> */}
        <div>
          <label for="motherEmail">Mother's Email:</label>
          <input type="email" id="motherEmail" name="motherEmail" required />
        </div>

        {/* <!-- Mother's Mobile Number --> */}
        <div>
          <label for="motherMobileNumber">Mother's Mobile Number:</label>
          <input type="tel" id="motherMobileNumber" name="motherMobileNumber" required />
        </div>

        {/* <!-- Mother's Qualification --> */}
        <div>
          <label for="motherQualification">Mother's Qualification:</label>
          <input type="text" id="motherQualification" name="motherQualification" required />
        </div>

        {/* <!-- Mother's Designation --> */}
        <div>
          <label for="motherDesignation">Mother's Designation:</label>
          <input type="text" id="motherDesignation" name="motherDesignation" required />
        </div>

        {/* <!-- Mother's Working Place --> */}
        <div>
          <label for="motherWorkingPlace">Mother's Working Place:</label>
          <input type="text" id="motherWorkingPlace" name="motherWorkingPlace" required />
        </div>

        {/* <!-- Submit Button --> */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Personalinfo;
