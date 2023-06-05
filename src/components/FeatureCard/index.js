import React from "react";
import { Link } from "react-router-dom";
import UilReact from "@iconscout/react-unicons/icons/uil-react";

const FeatureCard = ({ cards = [] }) => {
  const _cards = cards;
  const icons = ["laptop", "gem", "mars", "venus"];

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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        id="laptop"
                      >
                        <path
                          fill="#2c4355"
                          d="M18 23.5h-4a1 1 0 0 1-1-1v-.565h6v.565a1 1 0 0 1-1 1z"
                        ></path>
                        <path
                          fill="#2c4355"
                          d="M27.5 25.5h-23A2.502 2.502 0 0 1 2 23v-1a.5.5 0 0 1 .5-.5h27a.5.5 0 0 1 .5.5v1c0 1.379-1.121 2.5-2.5 2.5zM3 22.5v.5c0 .827.673 1.5 1.5 1.5h23c.827 0 1.5-.673 1.5-1.5v-.5H3z"
                        ></path>
                        <path
                          fill="#2c4355"
                          d="M22.5 22.5h-18A.5.5 0 0 1 4 22V9c0-1.379 1.121-2.5 2.5-2.5h19C26.879 6.5 28 7.621 28 9v2a.5.5 0 0 1-.5.5h-5c-.275 0-.5.225-.5.5v9c0 .275.225.5.5.5a.5.5 0 0 1 0 1zM5 21.5h16.086A1.48 1.48 0 0 1 21 21v-9c0-.827.673-1.5 1.5-1.5H27V9c0-.827-.673-1.5-1.5-1.5h-19C5.673 7.5 5 8.173 5 9v12.5z"
                        ></path>
                        <path
                          fill="#2c4355"
                          d="M21.5 20.5h-15A.5.5 0 0 1 6 20V9a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3c-.275 0-.5.225-.5.5v8a.5.5 0 0 1-.5.5zM7 19.5h14V12c0-.827.673-1.5 1.5-1.5H25v-1H7v10z"
                        ></path>
                        <circle cx="25" cy="20" r=".5" fill="#f15743"></circle>
                        <path
                          fill="#f15743"
                          d="M27.5 22.5h-5c-.827 0-1.5-.673-1.5-1.5v-9c0-.827.673-1.5 1.5-1.5h5c.827 0 1.5.673 1.5 1.5v9c0 .827-.673 1.5-1.5 1.5zm-5-11c-.275 0-.5.225-.5.5v9c0 .275.225.5.5.5h5c.275 0 .5-.225.5-.5v-9c0-.275-.225-.5-.5-.5h-5z"
                        ></path>
                        <path
                          fill="#f15743"
                          d="M25.5 13.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1z"
                        ></path>
                      </svg>
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
