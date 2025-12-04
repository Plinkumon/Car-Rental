import { Navigate } from "react-router-dom";


const AdminRoute = ({ children }) => {
 const user = JSON.parse(localStorage.getItem("user"));

  // If user exists & role is admin, allow access
  return user?.role === "admin" ? children : <Navigate to="/" />;
};

export default AdminRoute;
