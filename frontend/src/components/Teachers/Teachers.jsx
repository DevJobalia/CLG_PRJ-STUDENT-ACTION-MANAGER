import React from 'react'

const Teachers = () => {
  return (
    <div>
      <h1>What do you want to see?</h1>
      <p>Choose an option:</p>
      <button onClick={() => window.location.href = '/teacher_personal_info_check'}>
        Personal Information
      </button>
      <button onClick={() => window.location.href = '/teacher_academics_info_check'}>
        Academics
      </button>
    </div>
  );
}

export default Teachers;




