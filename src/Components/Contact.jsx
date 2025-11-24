import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-container">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Your luxury travel experience begins here.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> contact@autorentz.com</p>
          <p><strong>Support:</strong> support@autorentz.com</p>
          <p><strong>Address:</strong> AutoRentz Pvt Ltd, MG Road, Kochi, India</p>

          <h3>Business Hours</h3>
          <p>Mon – Fri: 9:00 AM – 9:00 PM</p>
          <p>Sat – Sun: 10:00 AM – 6:00 PM</p>
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Phone Number" />
            <textarea placeholder="Your Message" rows="5"></textarea>
            <button type="submit">Submit</button>
          </form>

          {/* Show Thank You Message */}
          {submitted && (
            <p className="thank-you">
              ✅ Thank you for contacting us! We will get back to you soon.
            </p>
          )}
        </div>
      </div>
      <div className="contact-map">
        <iframe
          title="Location"
          src="https://maps.google.com/maps?q=Kochi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
