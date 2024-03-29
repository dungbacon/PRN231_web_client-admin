import React, { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard";
import Loading from "../Loading";

const Categories = () => {
  const [categories = [], setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      ).then((res) => res.json());
      setCategories(response);
    };
    fetchCategories();
  }, []);

  if (categories.length === 0) return <Loading />;

  return <FeatureCard cards={categories} />;
};

export default Categories;
