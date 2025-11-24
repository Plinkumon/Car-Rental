import React from "react";
import "./Footer.css";

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
            <li>Home</li>
            <li>Cars</li>
            <li>About</li>
            <li>Contact</li>
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
