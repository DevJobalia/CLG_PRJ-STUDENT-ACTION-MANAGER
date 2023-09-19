import React from 'react'

const Mentor = () => {
  return (
    <div>
      <h1>What do you want to see?</h1>
      <p>Choose an option:</p>
      <button onClick={() => window.location.href = '/mentor_personal_info_check'}>
        Personal Information
      </button>
      <button onClick={() => window.location.href = '/mentor_academics_info_check'}>
        Academics
      </button>
    </div>
  );
}

export default Mentor;
