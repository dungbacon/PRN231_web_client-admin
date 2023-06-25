import react from "react";
import Home from "./modules/Home";
import { Routes, Route, Router } from "react-router-dom";
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
import AdminView from "./modules/Admin";
import Team from "./modules/Admin/Team";
import Contacts from "./modules/Admin/Contacts";
import Invoices from "./modules/Admin/Invoices";
import Form from "./modules/Admin/Form";
import Calendar from "./modules/Admin/Calendar";
import FAQ from "./modules/Admin/FAQ";
import BarChart from "./components/Admin/BarChart";
import Pie from "./modules/Admin/Pie";
import Line from "./modules/Admin/Line";

function App() {
  return (
    <div className="text-gray-600 text-4xl h-full">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin/*" element={<AdminView />}>
          <Route path="team" element={<Team />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="form" element={<Form />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="barchart" element={<BarChart />} />
          <Route path="pie" element={<Pie />} />
          <Route path="line" element={<Line />} />
        </Route>
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
