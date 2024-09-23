// src/pages/Signup.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LoginSignup.css'; // Shared style for login/signup

const Signup = () => {
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button>Sign Up</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
