import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div>
          <h3>RentMyRide</h3>
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
          <p>Email: support@rentmyride.com</p>
          <p>Phone: +1 202 555 0147</p>
        </div>

      </div>

      <p className="footer-bottom">
        © {new Date().getFullYear()} RentMyRide — All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
