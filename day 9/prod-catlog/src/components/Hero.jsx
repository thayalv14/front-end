import { ArrowRight, Star, Shield, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = ({ onExploreClick }) => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <Star size={14} className="star-icon" />
          <span>Award-Winning Collection 2026</span>
        </div>
        <h1 className="hero-title">
          Where Comfort <br />
          Meets <span className="serif-italic">Masterpiece</span>
        </h1>
        <p className="hero-subtitle">
          Discover hand-crafted, premium furniture designed for modern comfort and timeless sophistication. Elevate your living experience today.
        </p>
        
        <div className="hero-actions">
          <button onClick={onExploreClick} className="btn btn-primary btn-lg">
            Explore Collection
            <ArrowRight size={18} />
          </button>
          <Link to="/category/sofas" className="btn btn-outline btn-lg">
            Browse Sofas
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="hero-highlights">
          <div className="highlight-item">
            <Truck size={20} className="highlight-icon" />
            <div>
              <h5>Free White-Glove Delivery</h5>
              <p>On orders above $500</p>
            </div>
          </div>
          <div className="highlight-item">
            <Shield size={20} className="highlight-icon" />
            <div>
              <h5>Lifetime Warranty</h5>
              <p>On all wooden frames</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
