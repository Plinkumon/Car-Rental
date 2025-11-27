import React, { useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import cars from "../data/cars";
import { Link } from "react-router-dom";

function Cardata() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");
  


  // Filter Cars
  const filteredCars = cars.filter((car) => {
    const matchSearch =
      car.name.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "All" || car.type === category;

    return matchSearch && matchCategory;
  });

  if (sortOption === "popularity") {
    filteredCars.sort((a, b) => b.popularity - a.popularity);
  } else if (sortOption === "priceLowHigh") {
    filteredCars.sort((a, b) => a.pricePerDay - b.pricePerDay);
  } else if (sortOption === "priceHighLow") {
    filteredCars.sort((a, b) => b.pricePerDay - a.pricePerDay);
  }

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
          <option value="Hatchback">Hatchback</option>
        </select>

        <select
          className="form-select w-25"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="popularity">Popularity</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
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
                  <strong>From ₹</strong> {car.pricePerDay} <br />
                  <strong>Seats:</strong> {car.seats} <br />
                  <strong>Fuel:</strong> {car.fuel}<br />
                   <strong>Popularity: </strong> {car.popularity}

                </Card.Text>
            
                <Button variant="success"><Link to="/Booking" style={{textDecoration:'none',color: 'white'}} >
                  Book Now
                   </Link></Button>
                 <span> <Button variant="primary">Add to Wishlist</Button></span>
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
