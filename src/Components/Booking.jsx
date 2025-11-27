import React, { useState } from "react";
import "./Booking.css";
import { Link,useNavigate } from "react-router-dom";


function Booking() {
  
const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();


      navigate("/success",{
  state: { message: "Your car has been booked!!" }
});
    
  };

  return (
    <div className="booking-container">

      <div className="booking-header">
        <h1>Book your car now</h1>
        <p>Your luxury travel experience begins here.</p>
        <Link to="/cars">
          Back to Cars List
       </Link>
      </div>

      <div className="booking-content">
        
        <div className="booking-form">
          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>
             <div className="form-row mb-2">
    <div className="col m-2">
      <input type="text" className="form-control" placeholder="Full name"/>
    </div>
    <div className="col m-2">
      <input type="text" className="form-control" placeholder="Your Location"/>
    </div>
  </div>
  <div className="form-row mb-2">
    <div className="col m-2">
      <input type="text" className="form-control" placeholder="Date & Time"/>
    </div>
    <div className="col m-2">
      <input type="text" className="form-control" placeholder=" No. of Days"/>
    </div>
  </div><br />
            <button type="submit">Lets Drive </button>
          </form>

         
          
        </div>
      </div>
      
    </div>
  );
}

export default Booking;
