import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import Loading from "../../components/Loading";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const CategoryProducts = () => {
  const { name } = useParams();
  const [products = [], setProducts] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${name}`
      ).then((res) => res.json());
      setProducts(response);
    };
    fetchCategories();
  }, []);

  products.length === 0 && <Loading />;

  return (
    <div>
      <Header />
      <ProductCard products={products} />
      <Footer />
    </div>
  );
};

export default CategoryProducts;
