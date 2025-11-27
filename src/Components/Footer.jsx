import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div>
          <h3>AutoRentz</h3>
          <p>Fast • Affordable • Reliable Car Rentals</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/cars'>Cars</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Email: support@autorentz.com</p>
          <p>Phone: +91 1234567890</p>
        </div>

      </div>

      <p className="footer-bottom">
        © {new Date().getFullYear()} AutoRentz — All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
