import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import './loginform.modules.css';
import Navbar from '../navbar/Navbar';

function Loginform() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const location = useLocation();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

     // Here you can handle login logic, e.g., send the data to an API for authentication.
     console.log('Username:', username);
     console.log('Password:', password);
    
    // Check if the username and password match your criteria for successful login
    if (username === 'admin' && password === 'password') {
      // Redirect based on the user's previous selection
      if (location.state?.selection === 'admin-teacher') {
        navigate('/teacher'); // Use navigate to redirect to the teacher page
      } else if (location.state?.selection === 'mentor') {
        navigate('/mentor'); // Use navigate to redirect to the mentor page
      } else if (location.state?.selection === 'student') {
        navigate('/student'); // Use navigate to redirect to the student page
      }
    } else {
      // Handle login failure here if needed
      console.log('Login failed');
    }
  };

  return (
    <>
      <Navbar />
      <div className="login">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Loginform;
