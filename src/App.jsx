import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ShopProvider } from "./context/ShopContext";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import NewCars from "./pages/NewCars";
import UsedCars from "./pages/UsedCars";
import MobileForm from "./components/MobileForm";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import CheckoutPage from "./pages/CheckoutPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
      <ShopProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
            <Route path="/newcars" element={<NewCars />} />
            <Route path="/usedcars" element={<UsedCars />} />
            <Route path="/mobileform" element={<MobileForm />} />
            <Route path="/signupform" element={<SignUpForm />} />
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/checkout/:id" element={<CheckoutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Router>
      </ShopProvider>
  );
}

export default App;
