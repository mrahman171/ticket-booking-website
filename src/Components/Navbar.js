import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>         
        <li className="navbar-item">
          <Link to="/Event" className="navbar-link">Event</Link>
        </li>
        

        <li className="navbar-item">
          <Link to="/TicketPurchase" className="navbar-link">TicketPurchase</Link>
        </li>


        <li className="navbar-item">
          <Link to="/registration" className="navbar-link">Registration</Link>
        </li>


      </ul>
    </nav>
  );
};

export default Navbar;
