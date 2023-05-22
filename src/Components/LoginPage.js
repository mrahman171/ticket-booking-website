import React from 'react';
import LoginForm from '../Components/LoginForm';
import SocialLogin from '../Components/SocialLogin';
import "../App.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <LoginForm />
      <SocialLogin />
    </div>
  );
};

export default LoginPage;
