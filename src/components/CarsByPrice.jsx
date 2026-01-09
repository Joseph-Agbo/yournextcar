import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { TbCurrencyNaira } from "react-icons/tb";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "./ProductCard";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaAnglesUp } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

function CarsByPrice() {
  const { products, firstRange, secondRange, thirdRange } =
    useContext(ShopContext);

  const priceRanges = {
    budget: { min: 4_000_000, max: 7_999_999 },
    best: { min: 8_000_000, max: 15_999_999 },
    luxury: { min: 16_000_000, max: 45_000_000 },
  };

  const navigate = useNavigate();

  const [showSearchBar, setShowSearchBar] = useState(false)
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleSearchIconClick = () => {
    setShowSearchBar(true);
    setSearchResults([]);
    setMinPrice("");
    setMaxPrice("");
  }

  const handleCloseSearchBar = () => {
    setShowSearchBar(false);
    setSearchResults([])
  }

  function handleCustomSearch(e) {
    e.preventDefault();
    const min = Number(minPrice)
    const max = Number(maxPrice)
    if (!min || !max || min > max) {
      setSearchResults([])
      return;
    }
    const results = products.filter((p) => p.price >= min && p.price <= max)
    setSearchResults(results);
  }

  function handleViewAll(rangekey) {
    const range = priceRanges[rangekey];

    if (!range) return;

    const results = products.filter(
      (p) => p?.price >= range.min && p?.price <= range.max
    );

    navigate("/products", { state: { filteredProducts: results } });
  }

  return (
    <div className="pb-5">
      <div className="py-10 px-4 flex items-center justify-between ">
        {" "}
        <Link to="/">
          <IoHome className="size-6" />
        </Link>{" "}
        <p className="text-blue-950 text-2xl font-bold">Cars by Price</p>{" "}
        <BsSearch onClick={handleSearchIconClick} className="size-5" />{" "}
      </div>

      {showSearchBar && (
        <div className="bg-blue-50 px-4 py-3 flex flex-col items-center gap-x-2 mb-4 rounded-lg shadow">
          <form
            onSubmit={handleCustomSearch}
            className="flex flex-col w-full items-center gap-x-2"
          >
            <span><TbCurrencyNaira /></span>
            <input
              type="number"
              placeholder="Min price"
              min={0}
              value={minPrice}
              onChange={e => setMinPrice(e.target.value)}
              className="border px-2 py-2 text-center rounded-sm w-40"
              required
            />
            <span>-</span>
            <span><TbCurrencyNaira /></span>
            <input
              type="number"
              placeholder="Max price"
              min={0}
              value={maxPrice}
              onChange={e => setMaxPrice(e.target.value)}
              className="border px-2 py-2 text-center rounded-sm w-40 mb-2"
              required
            />
            <button
              type="submit"
              className="text-white mb-2 bg-blue-600 px-4 py-1 flex items-center rounded font-semibold"
            >
              Search
            </button>
          </form>
          <button onClick={handleCloseSearchBar} className="ml-2 text-red-400 border rounded-full">
            <AiOutlineClose className="size-6" />
          </button>
        </div>
      )}

       {showSearchBar && (
        <div className="px-4 mb-8">
          {searchResults.length === 0 ? (
            <p className="text-gray-500">No cars in this price range</p>
          ) : (
            <div className="flex overflow-x-auto gap-5">
              {searchResults.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      )}

      <section className="px-4 mb-12">
        <div className="flex justify-between mb-4 ">
          <h2 className="flex items-center text-xl font-semibold">
            {" "}
            <TbCurrencyNaira />
            4000000 - <TbCurrencyNaira />
            7999999
          </h2>
          <button
            type="button"
            onClick={() => handleViewAll("budget")}
            className="flex items-center gap-x-1 font-semibold text-blue-600 "
          >
            View all <FaAngleRight className="mt-0.5 [@media(max-width:360px)]:hidden" />{" "}
          </button>
        </div>
        <div>
          {firstRange.length === 0 ? (
            <p>No cars in this price range</p>
          ) : (
            <div className="flex overflow-x-auto overflow-y-hidden h-full scroll-smooth snap-x snap-mandatory gap-5">
              {firstRange.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="px-4 mb-12">
        <div className="flex justify-between mb-4 ">
          <h2 className="flex items-center text-xl font-semibold">
            {" "}
            <TbCurrencyNaira />
            8000000 - <TbCurrencyNaira />
            15999999
          </h2>
          <button
            type="button"
            onClick={() => handleViewAll("best")}
            className="flex items-center gap-x-1 font-semibold text-blue-600 "
          >
            View all <FaAngleRight className="mt-0.5 [@media(max-width:360px)]:hidden" />{" "}
          </button>
        </div>
        <div>
          {secondRange.length === 0 ? (
            <p>No cars in this price range</p>
          ) : (
            <div className="flex overflow-x-auto overflow-y-hidden h-full scroll-smooth snap-x snap-mandatory gap-5">
              {secondRange.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="px-4">
        <div className="flex justify-between mb-4 ">
          <h2 className="flex items-center text-xl font-semibold [@media(max-width:330px)]:hidden">
            {" "}
            <TbCurrencyNaira />
            16000000 - <TbCurrencyNaira />
            45000000
          </h2>
          <h2 className="flex items-center text-xl font-semibold [@media(min-width:331px)]:hidden">
            {" "}
            <TbCurrencyNaira />
            16000000 -
            Infinity
          </h2>
          <button
            type="button"
            onClick={() => handleViewAll("luxury")}
            className="flex items-center gap-x-1 font-semibold text-blue-600 "
          >
            View all <FaAngleRight className="mt-0.5 [@media(max-width:360px)]:hidden" />{" "}
          </button>
        </div>
        <div>
          {thirdRange.length === 0 ? (
            <p>No cars in this price range</p>
          ) : (
            <div className="flex overflow-x-auto overflow-y-hidden h-full scroll-smooth snap-x snap-mandatory gap-5">
              {thirdRange.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
      <Link
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-2 right-2.5 z-10 md:right-3.5"
      >
        <FaAnglesUp className="size-10 text-teal-500 md:hover:text-indigo-500" />
      </Link>
    </div>
  );
}

export default CarsByPrice;
