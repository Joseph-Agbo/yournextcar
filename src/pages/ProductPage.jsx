import React, { useContext, useState } from "react";
import ShopContext from "../context/ShopContext";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaAnglesUp } from "react-icons/fa6";

export default function ProductPage() {
  const { products, loading, error } = useContext(ShopContext);
  const [query, setQuery] = useState("");
  // Filter all cars
  const allcars = products.filter((p) => p && p.allcars);
  const filtered = query.trim()
    ? allcars.filter(
        (p) =>
          p &&
          p.name &&
          p.name.toLowerCase().includes(query.trim().toLowerCase())
      )
    : allcars;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mb-4 md:mb-6">
      {/* Search input (copied from Home.jsx) */}
      <div className="w-full flex justify-center py-4">
        <div className="w-[95%] flex items-center gap-3 bg-white/90 rounded-full px-3 py-2 shadow-lg shadow-indigo-300 border border-gray-400 md:py-3">
          <svg
            className="text-gray-500 text-xl"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm7.707-2.293-3.388-3.388A6.963 6.963 0 0 1 17 11a7 7 0 1 0-7 7c1.61 0 3.09-.55 4.293-1.707l3.388 3.388a1 1 0 0 0 1.414-1.414Z"
              fill="currentColor"
            />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your car here"
            className="w-full bg-transparent outline-none text-sm md:text-lg text-gray-800"
            aria-label="Search your car"
          />
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-8 mt-3 text-blue-950">All Cars</h1>
      {loading && <p className="text-center">Loading cars…</p>}
      {error && <p className="text-center text-red-600">Error: {error}</p>}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.length === 0 ? (
            <p>No cars found.</p>
          ) : (
            filtered.map((p) => <ProductCard key={p.id} product={p} />)
          )}
        </div>
      )}
      <Link to="/profile">
        <div className="border border-pink-950 w-[20%] rounded-md flex justify-center items-center p-4 bg-pink-950 fixed top-1/2 left-3.5 z-10 md:size-20 md:w-[9%] md:hover:bg-blue-900 md:transition-all duration-300 [@media(min-width:768px)_and_(max-width:950px)]:w-[11%]">
          <CgProfile className="size-10 bg-gray-200 text-teal-800 rounded-lg max-[330px]:size-8" />
        </div>
      </Link>
      <Link
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-2 right-2.5 z-10 md:right-3.5"
      >
        <FaAnglesUp className="size-10 text-teal-500 md:hover:text-indigo-500" />
      </Link>
    </div>
  );
}
