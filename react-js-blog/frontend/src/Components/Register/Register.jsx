import React, { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
  
  const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Bio:', bio);
      console.log('Email:', email);
      console.log('Password:', password);
    };
  
    return (
      <div className="d-flex vh-100 vw-100 justify-content-center align-items-center" id='register'>
        <div className="col-10 col-sm-4">
          <h2>Author Register</h2>
          <form id="registerForm" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Joe"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <label htmlFor="firstName">First name</label>
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Soap"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <label htmlFor="lastName">Last name</label>
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                id="bio"
                placeholder="Tell us about yourself."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                required
              ></textarea>
              <label htmlFor="bio">Bio</label>
              <div className="valid-feedback">Looks good!</div>
            </div>
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
                Register
              </button>
            </div>
            <div className="my-2">
              <Link to="/login">Login</Link>
            </div>
            
          </form>
          <div className="my-5 w-100 text-center">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          &copy; Blog App 2024
        </Link>
      </div>
        </div>
      </div>
    );
  };
  
  export default Register;
  