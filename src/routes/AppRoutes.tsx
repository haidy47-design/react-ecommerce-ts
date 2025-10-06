import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// ✅ Auth pages
import SignIn from "../features/auth/components/SignIn";
import SignUp from "../features/auth/components/SignUp";
import ForgetPassword from "../features/auth/components//ForgetPassword";
import ResetPassword from "../features/auth/components/ResetPassword";
import Profile from "../features/auth/components/Profile";

// ✅ Main pages
import Home from "../features/home/components/Home";
import ProductDetails from "../features/product/components/ProductDetails";
import Cart from "../features/product/components/Cart";
import Order from "../features/order/components/OrderDetails";

// ✅ Protected route component
import ProtectedRoute from "../components/common/ProtectedRoute";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Auth */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* Product */}
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />

      {/* Order */}
      <Route
        path="/order"
        element={
          <ProtectedRoute>
            <Order />
          </ProtectedRoute>
        }
      />

      {/* Default redirect */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
