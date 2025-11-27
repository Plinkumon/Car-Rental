import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = form.name;
     localStorage.setItem("username", username);
    if (validate()) {
      navigate("/success",{
  state: { message: "You are logged in!" }

});
    }
  };

  

  return (
    <div className="auth-container">
      <div className="auth-card">
        <form onSubmit={handleSubmit} className="p-3">
          <h2>Create Account</h2>

          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "orange" }} className="error">{errors.name}</p>}

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "orange" }} className="error">{errors.email}</p>}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password &&<p style={{ color: "orange" }} className="error">{errors.password}</p>}

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
           <p style={{ color: "orange" }} className="error">{errors.confirmPassword}</p>
          )}

          <button className="gold-btn">Sign Up</button>

          <p className="switch-text">
            Already have an account?
            <Link to="/login" className="btn btn-outline-light ms-2">
              Login
            </Link>
          </p>

          <Link to="/home">Back to Home</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
