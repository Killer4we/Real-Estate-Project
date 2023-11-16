import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authSlice'
import { request } from '../../util/fetchAPI'
import "../css/signin.css";
const Signin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async(e) => {
    e.preventDefault()
    try {
      const options = {
        'Content-Type': 'application/json'
      }
      const data = await request('/auth/login', "POST", options, {email, password})
      dispatch(login(data))
      navigate("/")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleLogin}>
        <h2>Log In</h2>
        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Log In</button>
        <small className='small'><b>Don't have an Account?</b></small>
        <Link to="/signup"><button>Create your Account</button></Link>
      </form>
    </div>
  );
};

export default Signin;
