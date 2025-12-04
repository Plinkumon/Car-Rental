import React, { useState, useEffect } from "react";
import carsData from "../data/cars";
import CarForm from "./CarForm";

function ManageCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cars"));
    if (!stored || stored.length === 0) {
    setCars(carsData);
    localStorage.setItem("cars", JSON.stringify(carsData));
  } else {
    setCars(stored);
  }

  }, []);

  const [editingCar, setEditingCar] = useState(null);

  const addOrUpdateCar = (car) => {
    if (car.id) {
      // UPDATE mode
      setCars(cars.map((c) => (c.id === car.id ? car : c)));
      setEditingCar(null);
    } else {
      // ADD mode
      const newCar = { ...car, id: Date.now().toString() };
      setCars([...cars, newCar]);
    }
  };


  const deleteCar = (id) => {
    const updated = cars.filter(car => car.id !== id);
    setCars(updated);
    localStorage.setItem("cars", JSON.stringify(updated));
  };
  const editCar = (car) => {
    setEditingCar(car);
  };

  return (
    <div>
      <h2>Manage Cars</h2>
<div className="manage-cars-container">
      <CarForm
        onSubmit={addOrUpdateCar}
        existingCar={editingCar}
        onCancel={() => setEditingCar(null)}
      />
      </div>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Car</th>
            <th>Price/Day</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cars.map(car => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.name}</td>
              <td>{car.pricePerDay}</td>
              <td>{car.type}</td>
              <td>
                <button onClick={() => editCar(car)}>Edit</button>
                <button className="delete-btn" onClick={() => deleteCar(car.id)}>Delete</button>
              </td> 
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default ManageCars;
