import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, ShoppingBag, ArrowLeft, CheckCircle2, Truck } from 'lucide-react';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Simulate API order placement
    const mockOrderNum = 'FW-' + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(mockOrderNum);
    setFormSubmitted(true);
    clearCart();
  };

  const tax = cartTotal * 0.08; // 8% sales tax
  const shipping = cartTotal >= 500 || cartTotal === 0 ? 0 : 49.99;
  const grandTotal = cartTotal + tax + shipping;

  if (formSubmitted) {
    return (
      <div className="checkout-success-container">
        <div className="checkout-success-card">
          <CheckCircle2 size={64} className="success-icon" />
          <h2>Order Confirmed!</h2>
          <p className="success-order-num">Your Order Number: <strong>{orderNumber}</strong></p>
          <p className="success-msg">
            Thank you for shopping at FurnitureWorld, <strong>{shippingInfo.firstName}</strong>. We've sent a detailed confirmation invoice to <strong>{shippingInfo.email}</strong>.
          </p>
          <div className="shipping-timeline">
            <Truck size={20} />
            <span>Estimated delivery date: 5-7 business days</span>
          </div>
          <Link to="/" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> Continue Shopping
        </Link>
        <h1>Secure Checkout</h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="checkout-empty-state">
          <ShoppingBag size={48} />
          <h3>Your cart is empty</h3>
          <p>You cannot checkout with an empty cart. Select some premium furniture items first!</p>
          <Link to="/" className="btn btn-primary">Go to Home</Link>
        </div>
      ) : (
        <div className="checkout-content">
          {/* Shipping Form */}
          <form className="checkout-form" onSubmit={handlePlaceOrder}>
            <section className="form-section">
              <h3 className="form-section-title">Shipping Address</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input 
                    type="text" 
                    id="firstName"
                    name="firstName" 
                    required 
                    value={shippingInfo.firstName} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName"
                    name="lastName" 
                    required 
                    value={shippingInfo.lastName} 
                    onChange={handleInputChange} 
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    required 
                    value={shippingInfo.email} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone" 
                    required 
                    value={shippingInfo.phone} 
                    onChange={handleInputChange} 
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input 
                  type="text" 
                  id="address"
                  name="address" 
                  required 
                  placeholder="Street address, apartment, unit"
                  value={shippingInfo.address} 
                  onChange={handleInputChange} 
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input 
                    type="text" 
                    id="city"
                    name="city" 
                    required 
                    value={shippingInfo.city} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zip">ZIP / Postal Code</label>
                  <input 
                    type="text" 
                    id="zip"
                    name="zip" 
                    required 
                    value={shippingInfo.zip} 
                    onChange={handleInputChange} 
                  />
                </div>
              </div>
            </section>

            <section className="form-section">
              <h3 className="form-section-title">Payment Method</h3>
              <div className="payment-type-badge">
                <CreditCard size={18} />
                <span>Credit Card / Debit Card</span>
              </div>

              <div className="form-group">
                <label htmlFor="cardName">Name on Card</label>
                <input 
                  type="text" 
                  id="cardName"
                  name="cardName" 
                  required 
                  value={shippingInfo.cardName} 
                  onChange={handleInputChange} 
                />
              </div>

              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input 
                  type="text" 
                  id="cardNumber"
                  name="cardNumber" 
                  required 
                  placeholder="0000 0000 0000 0000"
                  pattern="\d{16}"
                  maxLength="16"
                  value={shippingInfo.cardNumber} 
                  onChange={handleInputChange} 
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cardExpiry">Expiration Date</label>
                  <input 
                    type="text" 
                    id="cardExpiry"
                    name="cardExpiry" 
                    required 
                    placeholder="MM/YY"
                    maxLength="5"
                    value={shippingInfo.cardExpiry} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cardCvv">CVV / CVC</label>
                  <input 
                    type="password" 
                    id="cardCvv"
                    name="cardCvv" 
                    required 
                    placeholder="***"
                    maxLength="3"
                    pattern="\d{3}"
                    value={shippingInfo.cardCvv} 
                    onChange={handleInputChange} 
                  />
                </div>
              </div>
            </section>

            <button type="submit" className="btn btn-primary btn-block place-order-btn">
              Place Order (${grandTotal.toFixed(2)})
            </button>
          </form>

          {/* Order Summary sidebar */}
          <aside className="checkout-summary">
            <h3 className="summary-title">Order Summary</h3>
            <div className="summary-items">
              {cartItems.map((item) => (
                <div className="summary-item" key={item.product.id}>
                  <img src={item.product.image} alt={item.product.name} />
                  <div className="summary-item-info">
                    <h5>{item.product.name}</h5>
                    <p className="item-qty">Qty: {item.quantity}</p>
                  </div>
                  <span className="summary-item-price">${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="summary-invoice">
              <div className="invoice-row">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="invoice-row">
                <span>Sales Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="invoice-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="invoice-divider"></div>
              <div className="invoice-row total-row">
                <span>Grand Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Checkout;
