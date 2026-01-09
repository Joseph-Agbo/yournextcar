import React from "react";
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

function CarsByPrice() {
  const { products, firstRange, secondRange, thirdRange } =
    useContext(ShopContext);

  const priceRanges = {
    budget: { min: 4_000_000, max: 7_999_999 },
    best: { min: 8_000_000, max: 15_999_999 },
    luxury: { min: 16_000_000, max: 45_000_000 },
  };

  const navigate = useNavigate();

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
        <BsSearch className="size-5" />{" "}
      </div>

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
            View all <FaAngleRight className="mt-0.5" />{" "}
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
            View all <FaAngleRight className="mt-0.5" />{" "}
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
          <h2 className="flex items-center text-xl font-semibold">
            {" "}
            <TbCurrencyNaira />
            16000000 - <TbCurrencyNaira />
            45000000
          </h2>
          <button
            type="button"
            onClick={() => handleViewAll("luxury")}
            className="flex items-center gap-x-1 font-semibold text-blue-600 "
          >
            View all <FaAngleRight className="mt-0.5" />{" "}
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
