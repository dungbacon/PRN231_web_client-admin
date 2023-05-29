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
      {products.length > 0 ? (
        <Products products={products} />
      ) : (
        <div>Loading....</div>
      )}
      <FeatureCard />
      <Statistic />
    </>
  );
};

export default Home;
