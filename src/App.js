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
import EventSearch from './Components/EventSearch';
import Payment from './Components/Payment';
import backgroundImage from './assets/background.jpg'; 
 
const App = () => {
  return (
    <div className="app" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <NAV/>
      <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/registration" Component={RegistrationPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/Event" Component={EventPage} /> 
          <Route path="/Payment" Component={Payment} /> 
          <Route path="/EventsSearch" Component={EventSearch} />          
          <Route path="/TicketPurchase" Component={EventDetailsPage} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
