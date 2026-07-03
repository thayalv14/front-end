import "./App.css";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Luxury Sofa",
    room: "Living Room",
    material: "Fabric",
    color: "Grey",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
  },
  {
    id: 2,
    name: "Dining Table",
    room: "Dining Room",
    material: "Wood",
    color: "Brown",
    price: 30000,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
  },
  {
    id: 3,
    name: "Office Chair",
    room: "Office",
    material: "Leather",
    color: "Black",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=600",
  },
  {
    id: 4,
    name: "King Size Bed",
    room: "Bedroom",
    material: "Wood",
    color: "White",
    price: 55000,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
  },
  {
    id: 5,
    name: "Wardrobe",
    room: "Bedroom",
    material: "Wood",
    color: "Brown",
    price: 35000,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
  },
  {
    id: 6,
    name: "TV Unit",
    room: "Living Room",
    material: "Wood",
    color: "Black",
    price: 18000,
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600",
  },
  {
    id: 7,
    name: "Office Table",
    room: "Office",
    material: "Wood",
    color: "Brown",
    price: 22000,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600",
  },
  {
    id: 8,
    name: "Bookshelf",
    room: "Living Room",
    material: "Wood",
    color: "White",
    price: 15000,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600",
  },
];

function App() {
  const [room, setRoom] = useState("All");
  const [material, setMaterial] = useState("All");
  const [color, setColor] = useState("All");
  const [price, setPrice] = useState(60000);

  const filteredProducts = products.filter((product) => {
    return (
      (room === "All" || product.room === room) &&
      (material === "All" || product.material === material) &&
      (color === "All" || product.color === color) &&
      product.price <= price
    );
  });

  return (
    <div>

      {/* Hero */}

      <section className="hero">
        <h1>Modern Furniture Store</h1>
        <p>Elegant Furniture For Every Room</p>
      </section>

      {/* Filters */}

      <div className="filters">

        <select onChange={(e) => setRoom(e.target.value)}>
          <option>All Rooms</option>
          <option>Living Room</option>
          <option>Bedroom</option>
          <option>Dining Room</option>
          <option>Office</option>
        </select>

        <select onChange={(e) => setMaterial(e.target.value)}>
          <option>All materials</option>
          <option>Wood</option>
          <option>Fabric</option>
          <option>Leather</option>
        </select>

        <select onChange={(e) => setColor(e.target.value)}>
          <option>All colors</option>
          <option>Brown</option>
          <option>Grey</option>
          <option>Black</option>
          <option>White</option>
        </select>

        <div className="price">
          <label>Price : ₹{price}</label>

          <input
            type="range"
            min="5000"
            max="60000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

      </div>

      {/* Products */}

      <div className="product-grid">

        {filteredProducts.map((item) => (

          <div className="card" key={item.id}>

            <img src={item.image} alt={item.name} />

            <div className="content">
              <h2>{item.name}</h2>

              <p><b>Room :</b> {item.room}</p>

              <p><b>Material :</b> {item.material}</p>

              <p><b>Color :</b> {item.color}</p>

              <h3>₹{item.price.toLocaleString()}</h3>

              <button>Add to Cart</button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;