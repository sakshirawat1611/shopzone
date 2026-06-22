import { useCart } from '../context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'
import { ShoppingCart, Trash2 } from 'lucide-react'

const Cart = () => {
  const { cartItems, removeFromCart } = useCart()
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
  <div className="cart">
    <h2 className="cart-title">Your Cart</h2>
    {cartItems.length === 0 ? (
      <div className="cart-empty">
        <ShoppingCart size={48} />
        <p>Your cart is empty</p>
      </div>
    ) : (
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.thumbnail} alt={item.title} />
              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p>${item.price} x {item.quantity}</p>
              </div>
            <div className="cart-item-actions">
              <button className="remove-btn" onClick={() => removeFromCart(index)}>
                <Trash2 size={16} />
              </button>
        </div>
      </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="cart-total">
            <div className="cart-total-row">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link to="/checkout" className="checkout-link">
            Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    )}
  </div>
)
}

export default Cart