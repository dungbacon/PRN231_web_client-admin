import react from "react";
import Home from "./modules/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Product from "./modules/Product";
import Products from "./modules/Products";
import Contact from "./modules/Contact";
import Error404 from "./components/Error/error404";
import CategoryProducts from "./modules/CategoryProducts";
import Cart from "./modules/Cart";
import About from "./modules/About";
import SignUp from "./modules/Signup";
import LoginModule from "./modules/Login";

function App() {
  return (
    <div className="text-gray-600 text-4xl">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginModule />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/categories/:name" element={<CategoryProducts />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
