import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Sofa, ChevronDown, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const Navbar = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar-container">
      <div className="navbar-content">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
          <Sofa className="logo-icon" size={26} />
          <span>Furniture<span className="accent-text">World</span></span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <div className="dropdown">
            <button className="nav-link dropdown-toggle">
              Categories <ChevronDown size={14} />
            </button>
            <div className="dropdown-menu">
              <Link to="/category/chairs" className="dropdown-item">Chairs</Link>
              <Link to="/category/sofas" className="dropdown-item">Sofas</Link>
              <Link to="/category/beds" className="dropdown-item">Beds</Link>
              <Link to="/category/tables" className="dropdown-item">Tables</Link>
              <Link to="/category/dining" className="dropdown-item">Dining</Link>
              <Link to="/category/wardrobes" className="dropdown-item">Wardrobes</Link>
            </div>
          </div>
        </nav>

        {/* Action Buttons */}
        <div className="navbar-actions">
          <button 
            className="cart-toggle-btn" 
            onClick={() => setIsCartOpen(true)}
            aria-label="Open Cart"
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <div className="mobile-category-title">Categories</div>
          <div className="mobile-category-grid">
            <Link to="/category/chairs" className="mobile-category-link" onClick={() => setMobileMenuOpen(false)}>Chairs</Link>
            <Link to="/category/sofas" className="mobile-category-link" onClick={() => setMobileMenuOpen(false)}>Sofas</Link>
            <Link to="/category/beds" className="mobile-category-link" onClick={() => setMobileMenuOpen(false)}>Beds</Link>
            <Link to="/category/tables" className="mobile-category-link" onClick={() => setMobileMenuOpen(false)}>Tables</Link>
            <Link to="/category/dining" className="mobile-category-link" onClick={() => setMobileMenuOpen(false)}>Dining</Link>
            <Link to="/category/wardrobes" className="mobile-category-link" onClick={() => setMobileMenuOpen(false)}>Wardrobes</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
