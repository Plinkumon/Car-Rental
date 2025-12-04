import React, { useEffect, useState } from "react";

function ManageBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(stored);
  }, []);

  const updateStatus = (id, status) => {
    const updated = bookings.map(b =>
      b.id === id ? { ...b, status } : b
    );
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  return (
    <div>
      <h2>Manage Bookings</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Car</th>
            <th>Dates</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map(b => (
            <tr key={b.id}>
              <td>{b.username}</td>
              <td>{b.carName}</td>
              <td>{b.startDate} → {b.endDate}</td>
              <td>{b.status}</td>
              <td>
                <button className="approve-btn" onClick={() => updateStatus(b.id, "Approved")}>Approve</button>
                <button className="reject-btn" onClick={() => updateStatus(b.id, "Rejected")}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default ManageBookings;
