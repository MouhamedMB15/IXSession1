

import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#blogs">Blogs</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
      <hr className="footer-divider" />
      <p className="footer-copy">&copy; 2024 The Blog App, Inc</p>
    </footer>
  );
}

