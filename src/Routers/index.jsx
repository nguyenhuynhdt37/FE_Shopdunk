import ProductDetail from "../pages/ProductDetail";
import HomePage from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";
import CartPage from "../pages/CartPage";
const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/iphone" element={<ProductDetail />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default AppRouters;
