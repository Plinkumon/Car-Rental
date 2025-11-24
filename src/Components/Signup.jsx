import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="auth-container">

      <div className="auth-card">
        <h2>Create Account</h2>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <button className="gold-btn">Sign Up</button>

        <p className="switch-text">
          Already have an account?     <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
        </p>
        <Link to="/home">
                  Back to Home
               </Link>
      </div>

    </div>
  );
}

export default Signup;
