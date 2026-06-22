import { Navigate, Outlet } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProtectedRoute = () => {
  const { isLoggedIn } = useCart()

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute