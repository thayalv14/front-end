import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingCart, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart, 
    cartTotal 
  } = useCart();
  
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  const FREE_SHIPPING_THRESHOLD = 500;
  const shippingDiff = FREE_SHIPPING_THRESHOLD - cartTotal;

  return (
    <div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-header">
          <div className="cart-title-wrapper">
            <ShoppingCart size={20} />
            <h4>Your Shopping Cart</h4>
          </div>
          <button className="cart-close-btn" onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X size={22} />
          </button>
        </div>

        {/* Shipping Goal */}
        {cartItems.length > 0 && (
          <div className="shipping-alert">
            {shippingDiff > 0 ? (
              <p>
                Add <strong>${shippingDiff.toFixed(2)}</strong> more for <strong>Free Shipping!</strong>
              </p>
            ) : (
              <p className="free-shipping-success">🎉 Congratulations! You qualify for <strong>Free Shipping!</strong></p>
            )}
            <div className="progress-bar-container">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${Math.min((cartTotal / FREE_SHIPPING_THRESHOLD) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <ShoppingCart size={48} className="empty-icon" />
              <p>Your cart is empty</p>
              <button className="btn btn-primary" onClick={() => setIsCartOpen(false)}>
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.product.id}>
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    className="cart-item-img" 
                  />
                  <div className="cart-item-details">
                    <span className="cart-item-brand">{item.product.brand}</span>
                    <h5 className="cart-item-name">{item.product.name}</h5>
                    <span className="cart-item-price">${item.product.price}</span>
                    
                    {/* Quantity controls */}
                    <div className="cart-qty-controls">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>

                  <button 
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.product.id)}
                    aria-label="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span className="cart-total-price">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="cart-tax-notice">Shipping and taxes calculated at checkout.</p>
            
            <button className="btn btn-primary btn-block btn-checkout" onClick={handleCheckout}>
              Proceed to Checkout
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
