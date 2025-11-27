import {React,useEffect} from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "./Success.css";

function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const message = location.state?.message || "Action Completed Successfully!";

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2500); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="success-container">
      <div className="success-box">

        <h2 className="success-title">{message}</h2>

        <Link to="/home" className="home-btn">
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default Success;
