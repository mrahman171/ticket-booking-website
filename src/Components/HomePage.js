import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Ticket Booking Website!</h1>
      <div className="button-group">
        <Link to="/registration" className="home-page-button">Register</Link>
        <Link to="/login" className="home-page-button">Login</Link>
        
      </div>
    </div>
  );
};

export default HomePage;
