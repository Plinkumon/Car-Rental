import React from "react";
import Navbar1 from "./Navbar";
import './Home1.css'


function Home1() {
  return (
    
    <div
      style={{
        backgroundImage: "url('/bg-home1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        position: "relative",
        color: "white",
      }}
    >
      {/* Hero section */}
      <div className="home-container">
  <Navbar1/>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "30%",
         transform: "translate(-50%, -50%)",
          
        }}
      >
        <h5>ARRIVE IN STYLE</h5>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Feel the Royal Road Experience.</h1>
        <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
          Make every moment unforgettable with AutoRentz. <br />From exotic sports cars to executive sedans, indulge in the ultimate ride <br /> backed by premium service and attention to detail.
        </p>
        <button
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            backgroundColor: "#d4af37",
            border: "none",
            borderRadius: "5px",
            color: "white",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  
       </div>
  );
}

export default Home1;
