import { Sofa, Mail, Phone, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <Sofa className="logo-icon" size={24} />
            <span>Furniture<span className="accent-text">World</span></span>
          </Link>
          <p className="footer-desc">
            Crafting premium furniture pieces that transform spaces into homes. Experience the peak of comfort, craftsmanship, and timeless aesthetics.
          </p>
          <div className="footer-security">
            <ShieldCheck size={16} className="security-icon" />
            <span>Secured Checkout Protection</span>
          </div>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-title">Categories</h4>
          <ul className="footer-links">
            <li><Link to="/category/chairs">Chairs</Link></li>
            <li><Link to="/category/sofas">Sofas</Link></li>
            <li><Link to="/category/beds">Beds</Link></li>
            <li><Link to="/category/tables">Tables</Link></li>
            <li><Link to="/category/dining">Dining Sets</Link></li>
            <li><Link to="/category/wardrobes">Wardrobes</Link></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-title">Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={16} />
              <span>123 Luxury Ave, Suite 500, NY</span>
            </li>
            <li>
              <Phone size={16} />
              <span>+1 (800) 456-7890</span>
            </li>
            <li>
              <Mail size={16} />
              <span>support@furnitureworld.com</span>
            </li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4 className="footer-title">Join Our Newsletter</h4>
          <p className="newsletter-desc">Subscribe to receive exclusive deals, interior design ideas, and early catalog access.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" required aria-label="Newsletter email input" />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} FurnitureWorld. All rights reserved.</p>
        <p className="credits">
          Made with <Heart size={12} className="heart-icon" /> for beautiful living spaces.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
