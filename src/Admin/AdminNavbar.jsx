import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <nav className="admin-navbar">
      <Link to="/admin/dashboard">Dashboard</Link>
      <Link to="/admin/cars">Cars</Link>
      <Link to="/admin/bookings">Bookings</Link>
      <Link to="/admin/users">Users</Link>
    </nav>
  );
}
