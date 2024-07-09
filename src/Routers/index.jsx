import ProductDetail from "../pages/ProductDetail";
import HomePage from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";
const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/iphone" element={<ProductDetail />} />
    </Routes>
  );
};

export default AppRouters;
