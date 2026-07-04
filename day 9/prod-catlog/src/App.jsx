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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcNEuHqiy3V_ZK7OUgEQcv4Ei-DBlCXAHuXcXH-GK_1EJFM2w-XsMwn30&s=10",
  },
  {
    id: 2,
    name: "Dining Table",
    room: "Dining Room",
    material: "Wood",
    color: "Brown",
    price: 30000,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/003/088/054/small_2x/wooden-dining-table-set-isolated-free-photo.jpg",
  },
  {
    id: 3,
    name: "Office Chair",
    room: "Office",
    material: "Leather",
    color: "Black",
    price: 12000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQynfTj6zPeO1u6MD2zyYFwVNvMyyHPuMkGJWxse3boBg&s=10",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAMtPvdGN8Lh3f7lhAFObZTiapERM-T7qBKbqFwKLriw&s",
  },
  {
    id: 6,
    name: "TV Unit",
    room: "Living Room",
    material: "Wood",
    color: "Black",
    price: 18000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCGm-HzrbwMusy2yVqDyez9PQiYZ9pfEYY3FsrQStjFCQ8PcN4gpsMK78&s=10",
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
      "https://damroimages.blob.core.windows.net/damroimages/10414.jpg",
  },
];

function App() {
  const [room, setRoom] = useState("All");
  const [material, setMaterial] = useState("All");
  const [color, setColor] = useState("All");
  const [price, setPrice] = useState(60000);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return (
      matchesSearch &&
      (room === "All" || product.room === room) &&
      (material === "All" || product.material === material) &&
      (color === "All" || product.color === color) &&
      product.price <= price
    );
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const buyNow = () => {
    if (cart.length === 0) {
      alert("Cart is Empty!");
      return;
    }

    alert("Order Placed Successfully!");
    setCart([]);
  };

  return (
    <div>

      {/* Home Section */}

      <section className="home">
        <div className="home-content">
          <h1>Modern Furniture Collection</h1>

          <p>
            Premium Furniture for Living Room, Bedroom,
            Dining Room and Office.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("products")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Shop Now
          </button>
        </div>

        <div className="home-image">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900"
            alt="Furniture"
          />
        </div>
      </section>

      {/* Filters */}

      <div className="filters">

        <input
          type="text"
          placeholder="🔍 Search Furniture..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={room} onChange={(e) => setRoom(e.target.value)}>
          <option value="All">All Rooms</option>
          <option value="Living Room">Living Room</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Dining Room">Dining Room</option>
          <option value="Office">Office</option>
        </select>

        <select
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
        >
          <option value="All">All Materials</option>
          <option value="Wood">Wood</option>
          <option value="Fabric">Fabric</option>
          <option value="Leather">Leather</option>
        </select>

        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="All">All Colors</option>
          <option value="Brown">Brown</option>
          <option value="Grey">Grey</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
        </select>

        <div className="price">
          <label>Maximum Price : ₹{price.toLocaleString()}</label>

          <input
            type="range"
            min="5000"
            max="60000"
            step="1000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>

      </div>
            {/* Products */}

      <div className="product-grid" id="products">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((item) => (

            <div className="card" key={item.id}>

              <img src={item.image} alt={item.name} />

              <div className="content">

                <h2>{item.name}</h2>

                <p>
                  <strong>Room:</strong> {item.room}
                </p>

                <p>
                  <strong>Material:</strong> {item.material}
                </p>

                <p>
                  <strong>Color:</strong> {item.color}
                </p>

                <h3>₹{item.price.toLocaleString()}</h3>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "15px",
                  }}
                >

                  <button
                    style={{ flex: 1 }}
                    onClick={() => addToCart(item)}
                  >
                    🛒 Add to Cart
                  </button>

                  <button
                    style={{
                      width: "55px",
                      background: "#ff4d6d",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      alert(`${item.name} added to Wishlist ❤️`)
                    }
                  >
                    ❤
                  </button>

                </div>

              </div>

            </div>

          ))

        ) : (

          <h2
            style={{
              width: "100%",
              textAlign: "center",
              color: "#666",
            }}
          >
            No Products Found
          </h2>

        )}

      </div>
            {/* Cart Section */}

      <div className="cart-section">
        <h2>🛒 Your Cart ({cart.length})</h2>

        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} />

                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <p>₹{item.price.toLocaleString()}</p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))}

            <h3 className="total-price">
              Total : ₹
              {cart
                .reduce((sum, item) => sum + item.price, 0)
                .toLocaleString()}
            </h3>

            <button className="buy-btn" onClick={buyNow}>
              Buy Now
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;