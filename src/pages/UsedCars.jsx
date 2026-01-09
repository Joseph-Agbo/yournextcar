import React from "react";
import { useContext } from "react";
import ShopContext from "../context/ShopContext";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { FaAnglesUp } from "react-icons/fa6";

function UsedCars() {
  const { products } = useContext(ShopContext);
  const usedCars = products.filter((product) => product["used cars"] === true);

  return (
    <div className="space-y-10 mb-10 pt-2 md:pt-0 md:mb-15">
      <h1 className="my-8 px-3 font-bold text-2xl">Used Cars</h1>

      {usedCars.length === 0 && <p>No used cars available</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-3">
        {usedCars.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link to="/products">
        <button
          type="button"
          className="border border-blue-300 rounded-full px-3 py-2 bg-lime-200 text-lg text-blue-950 font-bold block mx-auto cursor-pointer shadow-lg shadow-indigo-300 md:bg-teal-200 md:hover:bg-linear-to-r md:hover:from-amber-100 md:hover:via-red-300 md:hover:to-blue-300 transition-all duration-200 ease-in-out md:text-xl md:px-5 md:hover:scale-105 md:transform md:mt-10"
        >
          View more Cars
        </button>
      </Link>
       <Link onClick={() => window.scrollTo({top: 0, behavior : "smooth"})} className="fixed bottom-2 right-2.5 z-10 md:right-3.5">
        <FaAnglesUp className="size-10 text-teal-500 md:hover:text-indigo-500" />
      </Link>
    </div>
  );
}

export default UsedCars;
