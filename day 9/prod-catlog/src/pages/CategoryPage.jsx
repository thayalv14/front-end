import { useParams, Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ChevronRight, ArrowLeft, SlidersHorizontal, Search, RotateCcw } from 'lucide-react';

const CategoryPage = () => {
  const { categoryName } = useParams();

  // Find category details
  const categoryInfo = useMemo(() => {
    return CATEGORIES.find(c => c.id === categoryName.toLowerCase()) || {
      name: categoryName.charAt(0).toUpperCase() + categoryName.slice(1),
      description: 'Explore our hand-selected furniture range.',
      image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80'
    };
  }, [categoryName]);

  // Filter and sorting states
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState(2500);
  const [sortBy, setSortBy] = useState('featured');
  const [brandFilter, setBrandFilter] = useState('all');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter(p => p.category === categoryName.toLowerCase());

    // Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
    }

    // Brand filter
    if (brandFilter !== 'all') {
      result = result.filter(p => p.brand === brandFilter);
    }

    // Price filter
    result = result.filter(p => p.price <= maxPrice);

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [categoryName, searchQuery, maxPrice, sortBy, brandFilter]);

  // Get unique brands for filter dropdown
  const uniqueBrands = useMemo(() => {
    const allBrands = PRODUCTS.filter(p => p.category === categoryName.toLowerCase()).map(p => p.brand);
    return ['all', ...new Set(allBrands)];
  }, [categoryName]);

  const resetFilters = () => {
    setSearchQuery('');
    setMaxPrice(2500);
    setSortBy('featured');
    setBrandFilter('all');
  };

  return (
    <div className="category-page">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <ChevronRight size={14} />
        <span className="breadcrumb-current">{categoryInfo.name}</span>
      </div>

      {/* Category Hero Banner */}
      <section className="category-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${categoryInfo.image})` }}>
        <div className="category-hero-text">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1>{categoryInfo.name}</h1>
          <p>{categoryInfo.description}</p>
        </div>
      </section>

      {/* Main Catalog View */}
      <section className="catalog-container">
        {/* Filters sidebar */}
        <aside className="filters-sidebar">
          <div className="filters-header">
            <SlidersHorizontal size={18} />
            <h4>Filter & Sort</h4>
          </div>

          {/* Search box */}
          <div className="filter-group">
            <label htmlFor="search-input">Search Product</label>
            <div className="search-input-wrapper">
              <Search size={16} className="search-icon" />
              <input 
                id="search-input"
                type="text" 
                placeholder="Name or brand..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Brand select */}
          <div className="filter-group">
            <label htmlFor="brand-select">Brand</label>
            <select 
              id="brand-select"
              value={brandFilter} 
              onChange={(e) => setBrandFilter(e.target.value)}
              className="select-input"
            >
              {uniqueBrands.map(brand => (
                <option key={brand} value={brand}>
                  {brand === 'all' ? 'All Brands' : brand}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="filter-group">
            <label htmlFor="sort-select">Sort By</label>
            <select 
              id="sort-select"
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="select-input"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="filter-group">
            <div className="price-label-row">
              <label htmlFor="price-range">Max Price</label>
              <span className="price-value">${maxPrice}</span>
            </div>
            <input 
              id="price-range"
              type="range" 
              min="100" 
              max="2500" 
              step="50"
              value={maxPrice} 
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="range-input"
            />
            <div className="price-limits">
              <span>$100</span>
              <span>$2500</span>
            </div>
          </div>

          {/* Reset button */}
          <button className="btn btn-outline btn-block reset-btn" onClick={resetFilters}>
            <RotateCcw size={14} />
            Reset Filters
          </button>
        </aside>

        {/* Product listing grid */}
        <main className="catalog-products">
          <div className="catalog-meta">
            <p>Showing <strong>{filteredProducts.length}</strong> products in <strong>{categoryInfo.name}</strong></p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="no-products-state">
              <h3>No products found</h3>
              <p>We couldn't find any products matching your current filters. Try relaxing your parameters or resetting filters.</p>
              <button className="btn btn-secondary" onClick={resetFilters}>Reset All Filters</button>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </section>
    </div>
  );
};

export default CategoryPage;
