import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './Loginas.modules.css';

const Loginas = () => {
  const navigate = useNavigate();

  const handleButtonClick = (selection) => {
    navigate('/login', { state: { selection } });
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h2>LogIn As</h2>
        <div className="button-container">
          <button onClick={() => handleButtonClick('admin-teacher')}>
            Admin/Teacher
          </button>
          <button onClick={() => handleButtonClick('mentor')}>Mentor</button>
          <button onClick={() => handleButtonClick('student')}>Student</button>
        </div>
      </div>
    </>
  );
};

export default Loginas;
