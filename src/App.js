import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage';
import RegistrationPage from './Components/RegistrationPage';
import LoginPage from './Components/LoginPage';
import NAV from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="app">
      <NAV/>
      <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/registration" Component={RegistrationPage} />
          <Route path="/login" Component={LoginPage} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
