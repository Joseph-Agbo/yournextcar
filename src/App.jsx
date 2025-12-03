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
import EditProfile from "./components/EditProfile";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ContactInfo from "./pages/ContactInfo";
import Terms from "./pages/Terms";
import UseOfWebsite from "./pages/UseOfWebsite";
import VehiclePrice from "./pages/VehiclePrice";
import Intellectual from "./pages/Intellectual";
import LimitLiability from "./pages/LimitLiability";
import GoverningLaw from "./pages/GoverningLaw";
import OurStory from "./pages/OurStory";
import OurTeam from "./pages/OurTeam";
import Choose from "./pages/Choose";
import CustomerReviews from "./pages/CustomerReviews";
import Delivery from "./pages/Delivery";


function App() {
  return (
      <ShopProvider>
        <Router>
          <ScrollToTop />
          <Header />
          <div className="pt-20 md:pt-23">
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
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/contact" element={<ContactInfo />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/useofwebsite" element={<UseOfWebsite />} />
            <Route path="/vehicleprice" element={<VehiclePrice />} />
            <Route path="/intellectual" element={<Intellectual />} />
            <Route path="/limit" element={<LimitLiability />} />
            <Route path="/govern" element={<GoverningLaw />} />
            <Route path="/ourstory" element={<OurStory />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/choose" element={<Choose />} />
            <Route path="/reviews" element={<CustomerReviews />} />
            <Route path="/delivery" element={<Delivery />} />
          </Routes>
          </div>
          <Footer />
        </Router>
      </ShopProvider>
  );
}

export default App;
