import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ products = [] }) => {
  return (
    <section className="text-gray-600 body-font mt-20">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => {
            console.log("product ", product);
            const { id, title, description, category, image, price, rating } =
              product;
            return (
              <Link
                to={`/products/${id}`}
                className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-4 cursor-pointer"
              >
                <Link
                  to={`/products/${id}`}
                  className="block relative h-48 rounded overflow-hidden"
                >
                  <img
                    alt={title}
                    className="object-contain object-center w-full h-full block"
                    src={image}
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                    {category}
                  </h3>
                  <h2 className="text-gray-500 title-font text-xl font-semibold">
                    {title}
                  </h2>
                  <p className="mt-1">${price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
