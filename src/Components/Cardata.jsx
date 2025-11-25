import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import cars from "../data/cars";
import { Link } from "react-router-dom";

function Cardata() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Filter Cars
  const filteredCars = cars.filter((car) => {
    const matchSearch =
      car.name.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "All" || car.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="container my-4">

      {/* Search + Filter */}
      <div className="d-flex justify-content-center gap-3 mb-4">
        <input
          type="text"
          placeholder="Search here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control w-50"
        />

        {/* Category Dropdown */}
        <select
          className="form-select w-25"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Luxury">Luxury</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
        </select>
      </div>

      {/* Car Cards */}
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <Card key={index} style={{ width: "22rem" }}>
              <Card.Img
                variant="top"
                src={car.image}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Text>
                  <strong>Price per Day:</strong> {car.pricePerDay} <br />
                  <strong>Seats:</strong> {car.seats} <br />
                  <strong>Fuel:</strong> {car.fuel}
                </Card.Text>
                <Button variant="dark"><Link to="/Booking" style={{textDecoration:'none',color: 'white'}} >
                  Book Now
                   </Link></Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No cars found.</p>
        )}
      </div>
    </div>
  );
}

export default Cardata;
