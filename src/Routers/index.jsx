import ProductDetail from "../pages/ProductDetail";
import HomePage from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";
import CartPage from "../pages/CartPage";
import Register from "../pages/Register/Register";
const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/iphone" element={<ProductDetail />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRouters;
