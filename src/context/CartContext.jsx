import { createContext, useState, useContext, useEffect } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
  const saved = localStorage.getItem('cart')
  return saved ? JSON.parse(saved) : []
})

useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cartItems))
}, [cartItems])

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = () => {
  setIsLoggedIn(true)
}
  const addToCart = (product) => {
  const exists = cartItems.find(item => item.id === product.id)
  if (exists) {
    setCartItems(cartItems.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    ))
  } else {
    setCartItems([...cartItems, { ...product, quantity: 1 }])
  }
}
  const removeFromCart = (index) => {
  setCartItems(cartItems.filter((_, i) => i !== index))
}
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isLoggedIn, login }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)