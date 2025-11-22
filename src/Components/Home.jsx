import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      
     
      <section className="hero">
        <div className="hero-text">
          <h1>Find Your Perfect Ride</h1>
          <p>Fast • Affordable • Reliable</p>
          <button className="hero-btn">Rent a Car</button>
        </div>
        
        
      </section>

      
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-boxes">

          <div className="feature">
            <img src="/icon1.jpeg" alt="" />
            <h3>Affordable Prices</h3>
            <p>Rent cars at unbeatable rates.</p>
          </div>

          <div className="feature">
            <img src="/icon2.jpg" alt="" />
            <h3>Wide Car Selection</h3>
            <p>Choose from SUVs, Sedans, and more.</p>
          </div>

          <div className="feature">
            <img src="/icon3.jpg" alt="" />
            <h3>24/7 Support</h3>
            <p>We’re here whenever you need us.</p>
          </div>

        </div>
      </section>

   
      <section className="cars">
        <h2>Popular Cars</h2>
        <div className="car-grid">

          <div className="car-card">
            <img src="/Toyota.jpg" alt="car" />
            <h3>Toyota Camry</h3>
            <p>₹400/day</p>
          </div>

          <div className="car-card">
            <img src="/HondaElevate10.jpg" alt="car" />
            <h3>Honda Elevate</h3>
            <p>₹4000/day</p>
          </div>

          <div className="car-card">
            <img src="/bmw8.jpg" alt="car" />
            <h3>BMW 8 Series</h3>
            <p>₹12000/day</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
