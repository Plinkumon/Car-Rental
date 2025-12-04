import React from "react";
import { Link,useNavigate } from "react-router-dom";

function AdminSidebar() {

const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  

  return (
    <div className="admin-sidebar">
      <h2>Admin</h2>

      <ul>
        <li><Link to="/admin/dashboard/home">Dashboard</Link></li>
        <li><Link to="/admin/dashboard/manage-cars">Manage Cars</Link></li>
        <li><Link to="/admin/dashboard/manage-bookings">Manage Bookings</Link></li>
        <li><button onClick={logout} className="logout-btn">Logout</button></li>
       
      </ul>
    </div>
  );
}

export default AdminSidebar;


