import React from "react";
import "./About.css";
import { Link } from "react-router-dom";


function About() {
  return (
    <div className="about-container">

      {/* Hero Section */}
      <div className="about-hero">
        <h1>About AutoRentz</h1>
        <p>Luxury. Style. Comfort — Redefined.</p>
        <Link to="/home">
          Back to Home
       </Link>
      </div>

      {/* Content Section */}
      <div className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            At <strong>AutoRentz</strong>, we believe every drive should feel
            extraordinary. We provide a premium fleet of luxury, exotic and
            executive vehicles for customers who value comfort, class, and unforgettable experiences.
          </p>

          <h2>Our Mission</h2>
          <p>
            To make luxury accessible and deliver a seamless,
            world-class driving experience that blends elegance with reliability.
          </p>

          <h2>What We Offer</h2>
          <ul>
            <li>✔ Luxury & Exotic Cars</li>
            <li>✔ Chauffeur Services</li>
            <li>✔ Flexible Rental Packages</li>
            <li>✔ Wedding & Event Rentals</li>
            <li>✔ Airport Transfers</li>
            <li>✔ 24/7 Customer Support</li>
          </ul>

          <h2>Why Choose Us?</h2>
          <p>
            Premium fleet, transparent pricing, perfectly maintained vehicles,
            and service that treats every customer like a VIP.
            At AutoRentz, every ride becomes a memory.
          </p>
        </div>

        <div className="about-image">
          <img src="/car1.jpg" alt="Luxury Car" />
        </div>
      </div>
    </div>
  );
}

export default About;
