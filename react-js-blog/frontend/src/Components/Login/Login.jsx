

import React, { useState } from 'react';
import './login.css';
import Register from '../Register/Register';
import { Link } from 'react-router-dom';






const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className=" container d-flex vh-100 vw-100 justify-content-center align-items-center">
      <div className="col-10 col-sm-4">
        <h2>Please Login</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email address</label>
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary w-100">
              Sign In
            </button>
            
          </div>
          <div className="my-2">
            <Link to="/register">Register</Link>
          </div>
         
        </form>
        <div className="my-5 w-100 text-center">&copy; Blog App 2024</div>
      </div>
    </div>
  );
};

export default Login;

