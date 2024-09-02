import ProductDetail from '../pages/ProductDetail'
import HomePage from '../pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import CartPage from '../pages/CartPage'
import Register from '../pages/Register'
import RegisterSuccess from '../pages/Register/RegisterSuccess'
import Login from '../pages/Login'
const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/iphone" element={<ProductDetail />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register/success" element={<RegisterSuccess />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AppRouters
