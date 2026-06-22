import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ShoppingBag, Shield, Truck, RotateCcw } from 'lucide-react'
import './Home.css'

const Home = () => {
  const [featured, setFeatured] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=4')
      .then(res => res.json())
      .then(data => setFeatured(data.products))
  }, [])

  return (
    <div className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">New Arrivals 2026</p>
          <h1>Shop Smarter.<br />Live Better.</h1>
          <p className="hero-sub">Discover thousands of products at unbeatable prices — delivered fast to your door.</p>
          <div className="hero-buttons">
            <Link to="/shop" className="hero-btn-primary">Browse Shop</Link>
            <Link to="/cart" className="hero-btn-secondary">View Cart</Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured">
        <h2 className="section-title">Featured Products</h2>
        <div className="featured-grid">
          {featured.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="featured-card">
              <div className="featured-img">
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className="featured-info">
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-item">
          <Truck size={32} color="#4F8EF7" />
          <h3>Free Shipping</h3>
          <p>On all orders over $50</p>
        </div>
        <div className="feature-item">
          <Shield size={32} color="#4F8EF7" />
          <h3>Secure Payment</h3>
          <p>100% protected transactions</p>
        </div>
        <div className="feature-item">
          <RotateCcw size={32} color="#4F8EF7" />
          <h3>Easy Returns</h3>
          <p>30 day return policy</p>
        </div>
        <div className="feature-item">
          <ShoppingBag size={32} color="#4F8EF7" />
          <h3>Top Brands</h3>
          <p>Hundreds of premium brands</p>
        </div>
      </section>

    </div>
  )
}

export default Home