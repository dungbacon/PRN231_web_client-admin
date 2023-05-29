import React, { useEffect, useState } from "react";
import Header from "./../../components/Header";
import Hero from "./../../components/Hero";
import Products from "../../components/Products";
import FeatureCard from "../../components/FeatureCard";
import Statistic from "../../components/Statistic";
import Footer from "../../components/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=12"
      );
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, {});

  return (
    <>
      <Hero />
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          Products
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Most Popular Product
        </h1>
      </div>
      {products.length > 0 ? (
        <Products products={products} />
      ) : (
        <div>Loading....</div>
      )}
      <Products />
      <FeatureCard />
      <Statistic />
    </>
  );
};

export default Home;
