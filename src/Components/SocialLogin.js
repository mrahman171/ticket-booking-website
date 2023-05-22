import React from 'react';
import "../App.css";

const SocialLogin = () => {
  const handleSocialLogin = (provider) => {
    // Handle social media login logic here
  };

  return (
    <div className="social-login">
      <h3>Login with Social Media</h3>
      <button className="social-login-btn facebook" onClick={() => handleSocialLogin('facebook')}>Login with Facebook</button>
      <button className="social-login-btn google" onClick={() => handleSocialLogin('google')}>Login with Google</button>
    </div>
  );
};

export default SocialLogin;
