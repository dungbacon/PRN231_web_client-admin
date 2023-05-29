import react from "react";
import Home from "./modules/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Product from "./modules/Product";

function App() {
  return (
    <div className="text-gray-600 text-4xl">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
