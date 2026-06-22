import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [])

  return (
  <div className="shop">
    <h1 className="shop-title">Our Products</h1>
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card" onClick={() => navigate('/product/' + product.id)}>
          <div className="product-img-wrap">
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <div className="product-info">
            <h3>{product.title}</h3>
            <p className="product-price">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)
}

export default Shop