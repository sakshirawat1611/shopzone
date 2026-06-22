import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import ProductDetail from './pages/ProductDetail'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import { useState } from 'react'
import Login from './pages/Login'
import Checkout from './pages/Checkout'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <BrowserRouter>
    <div className={darkMode ? 'app dark' : 'app'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
          <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App