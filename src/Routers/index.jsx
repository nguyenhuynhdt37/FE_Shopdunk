import ProductDetail from '../pages/ProductDetail'
import HomePage from '../pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import CartPage from '../pages/CartPage'
import Register from '../pages/Register'
import RegisterSuccess from '../pages/Register/RegisterSuccess'
import Login from '../pages/Login'
import ErrorPage from '../pages/ErrorPage'
import Category from '../pages/Category'
import Logout from '../components/Logout'
import ProtectedRoute from '../components/ProtectedRoute'
import ProductSeries from '../pages/ProductSeries'
const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/register/success" element={<RegisterSuccess />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/product_series/:id" element={<ProductSeries />} />
      <Route
        path="/register"
        element={
          <ProtectedRoute>
            <Register />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/login"
        element={
          <ProtectedRoute>
            <Login />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default AppRouters
