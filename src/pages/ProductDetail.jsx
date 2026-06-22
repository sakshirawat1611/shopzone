import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { ShoppingCart } from 'lucide-react'
import './ProductDetail.css'
import { ArrowLeft } from 'lucide-react'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { addToCart } = useCart()

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])

  if (!product) return <div>Loading...</div>

  return (
  <div className="product-detail">
    <button className="back-btn" onClick={() => navigate('/shop')}>
      <ArrowLeft size={18} />
      Back to Shop
    </button>
    <div className="product-detail-card">
      <div className="product-detail-img">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-detail-info">
        <h2>{product.title}</h2>
        <p className="product-detail-desc">{product.description}</p>
        <p className="product-detail-price">${product.price}</p>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  </div>
)
}

export default ProductDetail