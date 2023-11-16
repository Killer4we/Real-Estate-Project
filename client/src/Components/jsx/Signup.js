import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../css/signup.css";
import { request } from '../../util/fetchAPI'

const Signup = () => {
  const [state, setState] = useState({})
  //const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleState = (e) => {
    setState(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const headers = {
        'Content-Type': 'application/json',
      };
      const data = await request('/auth/register', 'POST', headers, { ...state });
  
      if (data.error) {
        console.error('Error from server:', data.error); // Log the error message
        window.alert('User already exists!'); // Show an alert to the user      this is not working!!!!
      } else {
        //dispatch(register(data))
        navigate('/');
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={handleState}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={handleState}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={handleState}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
        <small><b>Already a user?</b></small>
        <Link to="/signin"><button>Login to your Account</button></Link>
      </form>
    </div>
  );
};

export default Signup;
