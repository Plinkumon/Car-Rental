
import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    
 <div className="auth-container">
    
  <div className="auth-card">
    <h2>Login</h2>

    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />

    <button className="gold-btn">Login</button>

    <p className="switch-text">
      Don’t have an account? <Link to="/signup" >
          Sign Up
       </Link>
    </p>
    <Link to="/home">
          Back to Home
       </Link>
  </div>
</div>


  )
}

export default Login


