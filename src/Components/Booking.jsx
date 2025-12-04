import React, { useState } from "react";
import "./Booking.css";
import { Link,useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";


function Booking() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupDate: "",
    returnDate: "",
    pickupTime: "",
    returnTime: "",
  });
const [errors, setErrors] = useState({});
const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.pickupDate) newErrors.pickupDate = "Pickup date is required";
    if (!formData.returnDate) newErrors.returnDate = "Return date is required";

    if (formData.pickupDate && formData.returnDate) {
      if (new Date(formData.returnDate) < new Date(formData.pickupDate)) {
        newErrors.returnDate = "Return date must be after pickup date";
      }
    }

    return newErrors;
  };
  
const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
     const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      return;
    }


      navigate("/success",{
  state: { message: "Your car has been booked!!" }
});
    
  };

  return (
    <div className="booking-container">

      <div className="booking-header">
        <h1>Book your car now</h1>
        <p>Your luxury travel experience begins here.</p>
        <Link to="/cars">
          Back to Cars List
       </Link>
      </div>

      <div className="booking-content">
        
        <div className="booking-form">
          <h2>Send Us a Message</h2>

          <Form onSubmit={handleSubmit}>
        {/* Name */}
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border-gray-300"
          />
          {errors.name && <p className="text-danger small">{errors.name}</p>}
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="example@email.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-gray-300"
          />
          {errors.email && <p className="text-danger small">{errors.email}</p>}
        </Form.Group>

        {/* Phone */}
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="1234567890"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border-gray-300"
          />
          {errors.phone && <p className="text-danger small">{errors.phone}</p>}
        </Form.Group>

        {/* Pickup Date */}
        <Form.Group className="mb-3">
          <Form.Label>Pickup Date</Form.Label>
          <Form.Control
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
          />
          {errors.pickupDate && (
            <p className="text-danger small">{errors.pickupDate}</p>
          )}
        </Form.Group>

        {/* Return Date */}
        <Form.Group className="mb-3">
          <Form.Label>Return Date</Form.Label>
          <Form.Control
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
          />
          {errors.returnDate && (
            <p className="text-danger small">{errors.returnDate}</p>
          )}
        </Form.Group>

        {/* Time Fields */}
        <div className="grid grid-cols-2 gap-4">
          <Form.Group>
            <Form.Label>Pickup Time</Form.Label>
            <Form.Control
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Return Time</Form.Label>
            <Form.Control
              type="time"
              name="returnTime"
              value={formData.returnTime}
              onChange={handleChange}
            />
          </Form.Group>
        </div>

        <Button
          type="submit"
          className="btn btn-primary w-100 mt-4 shadow"
        >
          Confirm Booking
        </Button>
      </Form>

         
          
        </div>
      </div>
      
    </div>
  );
}

export default Booking;
