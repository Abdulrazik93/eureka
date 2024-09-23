// src/pages/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LoginSignup.css'; // Create a shared style for login/signup

const Login = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <Link to="/dashboard"><button>Login</button></Link>
      
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
