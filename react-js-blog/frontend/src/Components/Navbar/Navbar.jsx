import React from "react";
import Categories from '../Categories/Categories';
import { Link } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";

import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div style={{ margin: "0px 5%" }} className="container-fluid">
        <Link className="navbar-brand" to="/">
          iX Software Engineering Blog
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item dropdown">
              <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{border: 'none', backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                <IoPersonCircleOutline size={24} style={{display: 'flex', alignItems: 'center'}} />
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><Link className="dropdown-item" to="/login">Login</Link></li>
                <li><Link className="dropdown-item" to="/register">Sign Up</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
