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
    <Fragment>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
        <small>New user?. Register here</small>
        <Link to="/signup"><button>Create Account</button></Link>
      </form>
    </Fragment>
  );
};

export default Signin;
