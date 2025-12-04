import { useState, useEffect } from "react";

export default function CarForm({ onSubmit, existingCar, onCancel }) {
  const [car, setCar] = useState({
    id: "",
    name: "",
    type: "",
    pricePerDay: "",
    image: "",
  });

  // Load existing car data when editing
  useEffect(() => {
    if (existingCar) {
      setCar(existingCar);
    }
  }, [existingCar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(car);
    setCar({ id: "", name: "", type: "", pricePerDay: "", image: "" });
  };

  return (
    <form className="car-form" onSubmit={handleSubmit}>
      <h2>{existingCar ? "Edit Car" : "Add New Car"}</h2>

      <input
        type="text"
        placeholder="Car Name"
        name="name"
        value={car.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        placeholder="Type"
        name="type"
        value={car.type}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        placeholder="Price Per Day"
        name="pricePerDay"
        value={car.pricePerDay}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        placeholder="Image URL"
        name="image"
        value={car.image}
        onChange={handleChange}
      />

      <button type="submit">{existingCar ? "Update Car" : "Add Car"}</button>

      {existingCar && (
        <button
          type="button"
          onClick={onCancel}
          style={{ background: "#777" }}
        >
          Cancel Edit
        </button>
      )}
    </form>
  );
}
