import React from "react";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";
import "./Admin.css";

function AdminDashboard() {
  return (
    <div className="admin-layout">
      <AdminSidebar />

      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashboard;
