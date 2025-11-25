import React, { useState } from "react";
import "./Booking.css";
import { Link } from "react-router-dom";


function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Phone Number" />
            <input type="text" name="pickup_place" className="pickup_place" placeholder="Pickup Place" />
<input type="text" class="form-control" id="eventDateTime" name="eventDateTime"  placeholder="Date and Time" /> 
            <button type="submit">Lets Drive </button>
          </form>

          {/* Show Thank You Message */}
          {submitted && (
            <p className="thank-you">
              ✅ Thank you for contacting us! We will get back to you soon.
            </p>
          )}
        </div>
      </div>
      
    </div>
  );
}

export default Booking;
