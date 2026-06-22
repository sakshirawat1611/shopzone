import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { LogIn } from 'lucide-react'
import './Login.css'

const Login = () => {
  const { login } = useCart()
  const navigate = useNavigate()

  const handleLogin = () => {
    login()
    navigate('/checkout')
  }

  return (
    <div className="login">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Sign in to continue to checkout</p>
        <button className="login-btn" onClick={handleLogin}>
          <LogIn size={18} />
          Login as Guest
        </button>
      </div>
    </div>
  )
}

export default Login