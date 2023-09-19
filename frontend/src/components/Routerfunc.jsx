import React from 'react';
import { Link } from 'react-router-dom';

const Routerfunc = () => (
  <div>
    <h2>Welcome to the Home Page</h2>
    <Link to="/admin-teacher">
      <button>Admin/Teacher</button>
    </Link>
    <Link to="/mentor">
      <button>Mentor</button>
    </Link>
    <Link to="/student">
      <button>Student</button>
    </Link>
  </div>
);

export default Routerfunc;
