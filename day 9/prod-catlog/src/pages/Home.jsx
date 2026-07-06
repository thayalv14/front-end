import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ArrowRight, Star, Heart, Award } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const categoriesRef = useRef(null);
  const navigate = useNavigate();

  const scrollToCategories = () => {
    categoriesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Get a few featured items (first item of some categories)
  const featuredProducts = PRODUCTS.filter((p, idx) => idx % 4 === 0).slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero onExploreClick={scrollToCategories} />

      {/* Trust Badges */}
      <section className="trust-badges-container">
        <div className="trust-badge">
          <Award size={32} />
          <div>
            <h3>Premium Craftsmanship</h3>
            <p>100% sustainably-sourced solid wood structures</p>
          </div>
        </div>
        <div className="trust-badge">
          <Star size={32} />
          <div>
            <h3>5-Star Customer Support</h3>
            <p>Available round-the-clock for custom designs</p>
          </div>
        </div>
        <div className="trust-badge">
          <Heart size={32} />
          <div>
            <h3>Lifetime Frame Guarantee</h3>
            <p>We stand behind the quality of our works</p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section ref={categoriesRef} className="categories-section">
        <div className="section-header">
          <span className="section-tag">Collections</span>
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">
            Find the perfect matching pieces tailored for every room in your household.
          </p>
        </div>

        <div className="categories-grid">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              className="category-card"
              onClick={() => navigate(`/category/${cat.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="category-img-wrapper">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="category-img" 
                />
                <div className="category-img-overlay"></div>
              </div>
              <div className="category-card-body">
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
                <span className="category-link">
                  Browse Catalog
                  <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured-section">
        <div className="section-header">
          <span className="section-tag">Curated Highlights</span>
          <h2 className="section-title">Popular Creations</h2>
          <p className="section-subtitle">
            A small taste of our most popular designs, rated 5-stars by homeowners.
          </p>
        </div>

        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
