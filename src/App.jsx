import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ShopProvider } from "./context/ShopContext";

function App() {
  return (
      <ShopProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ShopProvider>
  );
}

export default App;
