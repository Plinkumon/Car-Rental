import React from "react";
import './Home1.css'
import { Link } from "react-router-dom";
import Statistics from "./Statistics";
import Cardata from "./Cardata";

function Home1() {
  return (
    <>
    <div className="home-wrapper">
      
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h5>ARRIVE IN STYLE</h5>

          <h1>Feel the Royal Road Experience.</h1>

          <p>
            Make every moment unforgettable with AutoRentz. <br />
            From exotic sports cars to executive sedans, indulge in the ultimate ride <br />
            backed by premium service and attention to detail.
          </p>

          <Link to="/Booking" className="book-btn">Book Now</Link>
        </div>
      </div>

      {/* Statistics Section */}
      <Statistics />
    </div>
    <h2> <i><strong>Popular Cars</strong></i></h2>
    <Cardata/>
    </>
  );
}

export default Home1;
