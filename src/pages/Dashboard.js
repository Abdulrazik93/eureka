// src/pages/Dashboard.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Menu />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<div>Welcome to the Dashboard</div>} />
            <Route path="/list-one" element={<div>List One Content</div>} />
            <Route path="/list-two" element={<div>List Two Content</div>} />
            <Route path="/sub-menu" element={<div>Sub Menu Content</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
