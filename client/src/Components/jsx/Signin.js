import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { Fragment } from 'react';
import "../css/signin.css";
const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic for authentication or API calls

    console.log('Form Data:', formData);
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Log In</button>
        <small>Don't have an Account?</small>
        <Link to="/signup"><button>Create your Account</button></Link>
      </form>
    </div>
  );
};

export default Signin;
