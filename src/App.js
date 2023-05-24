import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage';
import RegistrationPage from './Components/RegistrationPage';
import LoginPage from './Components/LoginPage';
import NAV from './Components/Navbar';
import Footer from './Components/Footer';
import EventPage from './Components/EventPage';
import EventDetailsPage from './Components/EventDetails';
import TicketPurchase from './Components/TicketPurchase';
 
const App = () => {
  return (
    <div className="app">
      <NAV/>
      <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/registration" Component={RegistrationPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/Event" Component={EventPage} />          
          <Route path="/TicketPurchase" Component={EventDetailsPage} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
