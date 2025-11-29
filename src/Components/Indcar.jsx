import React from 'react'
import { useParams } from "react-router-dom";
import cars from '../data/cars';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

function Indcar() {
  const { id } = useParams();
  const item = cars.find((p) => p.id.toString() === id);
   if (!item) return <h2>Item not found</h2>;
  return (
    <div  style={{ 
      marginTop: '50px',
      display:'flex',
   flexDirection:'column',
      padding: '20' , 
      color: '	#eff6fd', 
      justifyContent:'center', 
      alignItems:'center',
      minHeight:'80vh',
      textAlign:'center'
      }}>
       <img src={item.image} width="500" height="300"  alt={item.name} /><br />
      <h1>{item.name}</h1>
    <h5> <p> From : ₹{item.pricePerDay}</p>
      <p>Fuel : {item.fuel}</p>
       <p>Seats : {item.seats}</p>
      
      <p>Popularity : {item.popularity}</p>
      <p>Transmission : {item.transmission}</p>
      </h5>
      <h4 style={{ marginTop: "20px" }}>
        Availability:{" "}
        <span style={{ color: item.available ? "green" : "red" }}>
          {item.available ? "Available" : "Not Available"}
        </span>
      </h4>
      <p>
<Button variant="success" disabled={!item.available}><Link to="/Booking" style={{textDecoration:'none',color: 'white'}} >
                  Book Now
                   </Link></Button></p>
                <p> <span> <Button variant="primary">Add to Wishlist</Button></span></p>
    </div>
  )
}

export default Indcar