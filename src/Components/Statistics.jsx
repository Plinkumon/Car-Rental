import React from "react";
import "./Statistics.css";

export default function Statistics() {
  return (
    <section className="statistics-section">
      <div className="stats-container">

        <div className="stat-box">
          <h2>500+</h2>
          <p>Cars Available</p>
        </div>

        <div className="stat-box">
          <h2>1200+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-box">
          <h2>4.9★</h2>
          <p>Customer Rating</p>
        </div>

        <div className="stat-box">
          <h2>50+</h2>
          <p>Cities Covered</p>
        </div>

      </div>
    </section>
  );
}