import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, CreditCard, Star, Info } from 'lucide-react';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [showSpecs, setShowSpecs] = useState(false);

  const handleBuyNow = () => {
    addToCart(product, 1);
    navigate('/checkout');
  };

  return (
    <div className="product-card">
      {/* Brand & Badge */}
      <div className="product-card-header">
        <span className="product-brand">{product.brand}</span>
        <div className="product-rating">
          <Star size={14} className="star-icon" fill="currentColor" />
          <span>{product.rating}</span>
        </div>
      </div>

      {/* Image container */}
      <div className="product-img-wrapper">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-img"
          loading="lazy"
        />
        
        {/* Specs Toggle overlay */}
        <button 
          className="specs-toggle-btn"
          onClick={() => setShowSpecs(!showSpecs)}
          title="View Specifications"
        >
          <Info size={16} />
        </button>

        {showSpecs && (
          <div className="specs-overlay">
            <h5 className="specs-title">Specifications</h5>
            <ul className="specs-list">
              {Object.entries(product.specs).map(([key, val]) => (
                <li key={key}>
                  <strong>{key}:</strong> {val}
                </li>
              ))}
            </ul>
            <button className="specs-close-btn" onClick={() => setShowSpecs(false)}>Close</button>
          </div>
        )}
      </div>

      {/* Info Body */}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-footer">
          <div className="product-price-section">
            <span className="price-symbol">$</span>
            <span className="product-price">{product.price}</span>
          </div>
          <span className="review-count">({product.reviews} reviews)</span>
        </div>

        {/* Call to Actions */}
        <div className="product-actions">
          <button 
            className="btn btn-secondary btn-add-to-cart"
            onClick={() => addToCart(product, 1)}
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
          <button 
            className="btn btn-primary btn-buy-now"
            onClick={handleBuyNow}
          >
            <CreditCard size={16} />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
