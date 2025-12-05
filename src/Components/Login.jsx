import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

  const [input, setInput] = useState({
    uname: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    // Email validation
    if (!input.uname) {
      newErrors.email = "Username is required";
    } 

    // Password validation
    if (!input.password) {
      newErrors.password = "Password is required";
    } else if (input.password.length < 6) {
      newErrors.password = "Wrong Password";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
const username = input.uname;
const password = input.password;
     localStorage.setItem("username", username);

    if (validate()) {
      if (username === "admin" && password === "admin123") {
      localStorage.setItem("user", JSON.stringify({
        username: "admin",
        role: "admin"
      }));
      navigate("/admin/dashboard/home");
      return;
    }
      
      localStorage.setItem("user", JSON.stringify({
      username: username,
      role: "user"
    }));

    navigate("/");
  }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <form onSubmit={handleSubmit}>
          <h2>Login</h2>

          <input
            type="text"
            placeholder="Username"
            name="uname"
            value={input.uname}
            onChange={handleChange}
          />
          {errors.email && <p className="error" style={{ color: "orange" }}>{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error" style={{ color: "orange" }}>{errors.password}</p>}

          <button className="gold-btn" type="submit">Login</button>

          <p className="switch-text">
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>

          <Link to="/home">Back to Home</Link>
        </form>

      </div>
    </div>
  );
}

export default Login;
