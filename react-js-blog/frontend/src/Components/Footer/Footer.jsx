

import React from 'react';
import './footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/blogs'>Blogs</Link>
          <Link to='/about'>About</Link>
        </ul>
      </nav>
      <hr className="footer-divider" />
      <p className="footer-copy">&copy; 2024 The Blog App, Inc</p>
    </footer>
  );
}

