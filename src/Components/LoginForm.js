import React, { useState } from 'react';
import "../App.css";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login Form</h2>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
