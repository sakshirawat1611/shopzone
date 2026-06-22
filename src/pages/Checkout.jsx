import { useCart } from '../context/CartContext'
import { CheckCircle } from 'lucide-react'
import './Checkout.css'

const Checkout = () => {
  const { cartItems } = useCart()

  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="checkout">
      <div className="checkout-card">
        <CheckCircle size={48} color="#4F8EF7" />
        <h2 className="checkout-title">Order Summary</h2>
        <p className="checkout-subtitle">Review your items before placing the order</p>
        <div className="checkout-items">
          {cartItems.map((item, index) => (
            <div key={index} className="checkout-item">
              <img src={item.thumbnail} alt={item.title} />
              <div className="checkout-item-info">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="checkout-total">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="checkout-btn">Place Order</button>
      </div>
    </div>
  )
}

export default Checkout