import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedList);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedList = wishlist.filter(item => item.id !== id);
    setWishlist(updatedList);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
  };

  return (
    <div className="container mt-4 bg-light">
      <h2 className="text-center mb-4">❤️ Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <h4 className="text-center text-muted">No items in wishlist</h4>
      ) : (
        <div className="row">
          {wishlist.map(car => (
            <div className="col-md-4 mb-4" key={car.id}>
              <Card>
                <Link to={`/cars/${car.id}`}>
                  <Card.Img
                    variant="top"
                    src={car.image}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      cursor: "pointer"
                    }}
                  />
                </Link>

                <Card.Body>
                  <Card.Title>{car.name}</Card.Title>
                  <Card.Text>
                    <strong>Starts From : ₹{car.pricePerDay} </strong><br />
                     <strong>Seats:</strong> {car.seats} <br />
                  <strong>Fuel:</strong> {car.fuel}<br />
                   <strong>Popularity: </strong> {car.popularity}
                  </Card.Text>
 <Button variant="success"><Link to="/Booking" style={{textDecoration:'none',color: 'white'}} >
                  Book Now
                   </Link></Button>
                  <Button
                    variant="danger"
                    onClick={() => removeFromWishlist(car.id)}
                  >
                    Remove
                  </Button>

                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
