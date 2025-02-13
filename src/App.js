import React, { useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";
import Login from "./pages/Login";
import FilterData from "./pages/FilterData";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import Contact from "./pages/Contact";










function App() {
  const [order,setOrder]=useState(null)
  const [isLoggedIn,setIsLoggedIn]=useState(true)
  return (
    <BrowserRouter>
      <Navbar  isLoggedIn={isLoggedIn}/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
      <Route path="/order-confirmation" element={<Order order={order} />} />
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />} />
      <Route path="/register" element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={false} />} />
      <Route path="/filter-data" element={<FilterData />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
    
  );
}

export default App;
