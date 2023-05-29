import react from "react";
import Home from "./modules/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Product from "./modules/Product";
import Products from "./modules/Products";

function App() {
  return (
    <div className="text-gray-600 text-4xl">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
