import React from 'react';

const Studentsform = () => {
  return (
    <div>
      <h1>Student Form</h1>
      <p>What do you want to fill?</p>
      <p>Choose an option:</p>
      <button onClick={() => window.location.href = '/personalinfo'}>
        Personal Information
      </button>
      <button onClick={() => window.location.href = '/academicsinfo'}>
        Academics
      </button>
    </div>
  );
};

export default Studentsform;
