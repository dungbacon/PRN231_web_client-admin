import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { electronics, jewelery, men, women } from "../../constants/icons";
import StringToHtml from "../../common_function/StringToHtml";

const FeatureCard = ({ cards = [] }) => {
  const _cards = cards;
  const icons = [electronics, jewelery, men, women];

  const result = _cards.reduce((acc, value, index) => {
    acc[value] = icons[index];
    return acc;
  }, {});

  return (
    <section className="text-gray-600">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1 uppercase">
            Category
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 capitalize">
            All the Categories
          </h1>
        </div>

        <div className="flex flex-wrap -m-4">
          {_cards?.map((item, index) => {
            return (
              <Link
                key={index}
                to={`/categories/${item}`}
                className={`p-4 md:w-1/${cards.length} cursor-pointer`}
              >
                <div className="flex rounded-lg h-full bg-gray-100 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3  text-green-500 flex-shrink-0">
                      <StringToHtml input={result[item]} />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium capitalize">
                      {item}
                    </h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
