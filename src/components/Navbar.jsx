import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { ShoppingCart, Sun, Moon, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import './Navbar.css'

const Navbar = ({ darkMode, setDarkMode }) => {
  const { cartItems, isLoggedIn } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">ShopZone</Link>
      <div className="navbar-center">
        <div className={menuOpen ? 'navbar-links open' : 'navbar-links'}>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Shop</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Contact</NavLink>
          {!isLoggedIn ? (
            <Link to="/login" onClick={closeMenu}>Login</Link>
          ) : (
            <Link to="/checkout" onClick={closeMenu}>Checkout</Link>
          )}
        </div>
        <div className="navbar-right">
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link to="/cart" className="cart-icon" onClick={closeMenu}>
            <ShoppingCart size={20} />
            {cartItems.length > 0 && (
              <span className="cart-badge">{cartItems.length}</span>
            )}
          </Link>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar