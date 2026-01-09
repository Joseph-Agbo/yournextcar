import ProductCard from "../components/ProductCard";
import { AiOutlineSearch } from "react-icons/ai";
import { useContext, useState, useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import CarCarousel from "../components/CarCarousel";
import { FaAnglesUp } from "react-icons/fa6";
import ScrollingAnime from "../components/ScrollingAnime";
import { TbChartBarPopular } from "react-icons/tb";
import { FaRegCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  const {
    products,
    trending,
    topselling,
    newinventory,
    sedan,
    suv,
    truck,
    loading,
    error,
  } = useContext(ShopContext);

  const [query, setQuery] = useState("");
  const suvRef = useRef(null);
  const sedanRef = useRef(null);
  const truckRef = useRef(null);
  const topsellingRef = useRef(null);
  const trendingRef = useRef(null);

  const priceRanges = {
    budget: { min: 4_000_000, max: 7_999_999 },
    best: { min: 8_000_000, max: 15_999_999 },
    luxury: { min: 16_000_000, max: 45_000_000 },
  };

  const [selectedRange, setSelectedRange] = useState(null);
  const [rangeResults, setRangeResults] = useState([]);

  function filterByPriceRange(rangekey) {
    const range = priceRanges[rangekey];

    if (!range) return;

    const results = products.filter(
      (p) => p?.price >= range.min && p?.price <= range.max
    );

    setSelectedRange(rangekey);
    setRangeResults(results);
  }

  const filtered = query.trim()
    ? products.filter(
        (p) =>
          p &&
          p.name &&
          p.name.toLowerCase().includes(query.trim().toLowerCase())
      )
    : null;

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  const circleClass = (key) =>
    `transition-all duration-200 rounded-full ${
      selectedRange === key ? "ring-3 ring-green-400" : "text-slate-300"
    }`;

  const priceTextClass = (key) =>
    `transition-colors ${
      selectedRange === key
        ? "[@media(min-width:768px)_and_(max-width:1250px)]:bg-green-600 " +
          "[@media(min-width:768px)_and_(max-width:1250px)]:text-white"
        : ""
    }`;

  return (
    <div>
      <div className="h-[73vh] md:h-[83vh]">
        <CarCarousel />
      </div>
      {/* Mobile-only horizontal search bar placed before title */}
      <div className="w-full flex justify-center md:hidden pt-6">
        <div className="w-[95%] flex items-center gap-3 bg-white/90 rounded-full px-3 py-3 border border-gray-400 shadow-lg shadow-indigo-300">
          <AiOutlineSearch className="text-gray-500 text-xl" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your car here"
            className="w-full bg-transparent outline-none text-sm text-gray-800"
            aria-label="Search your car"
          />
        </div>
      </div>
      <div className="mt-9 md:mt-0">
        <ScrollingAnime />
      </div>
      <div className="mx-auto px-4 py-10 md:w-[98%]">
        <div
          className=" md:grid
  md:grid-cols-[18%_80%]
  md:gap-5
  md:max-w-full"
        >
          {/* Sidebar */}
          <aside className="hidden md:block">
            <div
              className="sticky top-24 rounded-xl bg-blue-950 text-white px-4 py-6 shadow-lg shadow-indigo-200 border border-slate-100 [@media(min-width:768px)_and_(max-width:1250px)]:px-2

"
            >
              <h2 className="text-lg font-semibold text-center text-slate-100 mb-4">
                Cars by Price
              </h2>
              <h2 className="flex items-center gap-x-1 mb-3">
                <TbChartBarPopular
                  className="[@media(min-width:768px)_and_(max-width:1250px)]:hidden
"
                />{" "}
                Popular Ranges
              </h2>
              <ul className="space-y-3 text-sm">
                <li
                  onClick={() => filterByPriceRange("budget")}
                  className={`cursor-pointer flex gap-x-13 items-center border border-green-200 rounded-xl py-1 px-2 md:hover:bg-green-600 [@media(min-width:768px)_and_(max-width:1250px)]:justify-center [@media(min-width:768px)_and_(max-width:1250px)]:text-lg ${priceTextClass("budget")}`}
                >
                  <span>
                    4m - 7m <br />{" "}
                    <span className="text-slate-200 [@media(min-width:768px)_and_(max-width:1250px)]:hidden">
                      {" "}
                      Budget Friendly
                    </span>{" "}
                  </span>{" "}
                  <span className="[@media(min-width:768px)_and_(max-width:1250px)]:hidden">
                    <FaRegCircle className={circleClass("budget")} />
                  </span>
                </li>
                <li
                  onClick={() => filterByPriceRange("best")}
                  className={`cursor-pointer flex gap-x-20 items-center border border-green-200 rounded-xl py-1 px-2 md:hover:bg-green-600 [@media(min-width:768px)_and_(max-width:1250px)]:justify-center [@media(min-width:768px)_and_(max-width:1250px)]:text-lg ${priceTextClass("best")}`}
                >
                  <span>
                    8m - 15m <br />{" "}
                    <span className="text-slate-200 [@media(min-width:768px)_and_(max-width:1250px)]:hidden">
                      {" "}
                      Best Sellers
                    </span>{" "}
                  </span>{" "}
                  <span className="[@media(min-width:768px)_and_(max-width:1250px)]:hidden">
                    <FaRegCircle className={circleClass("best")} />
                  </span>
                </li>
                <li
                  onClick={() => filterByPriceRange("luxury")}
                  className={`cursor-pointer flex gap-x-14 items-center border border-green-200 rounded-xl py-1 px-2 md:hover:bg-green-600 [@media(min-width:768px)_and_(max-width:1250px)]:justify-center [@media(min-width:768px)_and_(max-width:1250px)]:text-lg ${priceTextClass("luxury")}`}
                >
                  <span>
                    16m - 45m <br />{" "}
                    <span className="text-slate-200 [@media(min-width:768px)_and_(max-width:1250px)]:hidden">
                      {" "}
                      Luxury & Sport{" "}
                    </span>{" "}
                  </span>{" "}
                  <span className="[@media(min-width:768px)_and_(max-width:1250px)]:hidden">
                    <FaRegCircle className={circleClass("luxury")} />
                  </span>
                </li>
                <li className="border border-teal-300 rounded-full py-2 bg-green-600 text-black md:cursor-pointer md:hover:bg-linear-to-r md:hover:from-green-950/50 md:hover:to-green-300">
                  {selectedRange ? (
                    <Link
                      to="/products"
                      state={{ filteredProducts: rangeResults }}
                      className="flex items-center justify-center gap-x-3 font-semibold"
                    >
                      <span className="[@media(min-width:768px)_and_(max-width:1250px)]:hidden">
                        Show {rangeResults.length} Results
                      </span>{" "}
                      <span className="hidden [@media(min-width:768px)_and_(max-width:1250px)]:block">
                        {rangeResults.length} Results
                      </span>{" "}
                      <FaArrowRight />
                    </Link>
                  ) : (
                    <p className="text-center font-semibold opacity-80">
                      <span className="[@media(min-width:768px)_and_(max-width:1250px)]:hidden">
                        Select a price range
                      </span>
                      <span className="hidden [@media(min-width:768px)_and_(max-width:1250px)]:block">
                        Select a price
                      </span>
                    </p>
                  )}
                </li>
              </ul>
            </div>
          </aside>

          <main>
            {loading && <p className="text-center">Loading products…</p>}
            {error && (
              <p className="text-center text-red-600">Error: {error}</p>
            )}

            {!loading && !error && (
              <>
                {filtered ? (
                  <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                      Search results for "{query}"
                    </h2>
                    {filtered.length === 0 ? (
                      <p>No cars found</p>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {filtered.map((p) => (
                          <ProductCard key={p.id} product={p} />
                        ))}
                      </div>
                    )}
                  </section>
                ) : null}

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">SUV</h2>
                  <div className="relative">
                    <button
                      type="button"
                      aria-label="scroll SUV products"
                      className="absolute right-1 top-1/2 -translate-y-1/2 z-10 md:transform md:hover:scale-110"
                      onClick={() => {
                        if (suvRef.current) {
                          suvRef.current.scrollBy({
                            left: 300,
                            behavior: "smooth",
                          });
                        }
                      }}
                    >
                      <IoIosArrowDroprightCircle className="text-4xl text-green-500 animate-pulse md:cursor-pointer" />
                    </button>
                    {suv.length === 0 ? (
                      <p>No trending products</p>
                    ) : (
                      <div
                        ref={suvRef}
                        className="flex overflow-x-auto overflow-y-hidden h-full scroll-smooth snap-x snap-mandatory gap-5 no-scrollbar"
                      >
                        {suv.map((p) => (
                          <ProductCard key={p.id} product={p} />
                        ))}
                      </div>
                    )}
                  </div>
                </section>
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Sedan</h2>
                  <div className="relative">
                    <button
                      type="button"
                      aria-label="scroll Sedan products"
                      className="absolute right-1 top-1/2 -translate-y-1/2 z-10 md:transform md:hover:scale-110"
                      onClick={() => {
                        if (sedanRef.current) {
                          sedanRef.current.scrollBy({
                            left: 300,
                            behavior: "smooth",
                          });
                        }
                      }}
                    >
                      <IoIosArrowDroprightCircle className="text-4xl text-green-500 animate-pulse md:cursor-pointer" />
                    </button>
                    {sedan.length === 0 ? (
                      <p>No trending products</p>
                    ) : (
                      <div
                        ref={sedanRef}
                        className="flex overflow-x-auto overflow-y-hidden h-full scroll-smooth snap-x snap-mandatory gap-5 no-scrollbar"
                      >
                        {sedan.map((p) => (
                          <ProductCard key={p.id} product={p} />
                        ))}
                      </div>
                    )}
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Truck</h2>
                  <div className="relative">
                    <button
                      type="button"
                      aria-label="scroll Truck products"
                      className="absolute right-1 top-1/2 -translate-y-1/2 z-10 md:transform md:hover:scale-110"
                      onClick={() => {
                        if (truckRef.current) {
                          truckRef.current.scrollBy({
                            left: 300,
                            behavior: "smooth",
                          });
                        }
                      }}
                    >
                      <IoIosArrowDroprightCircle className="text-4xl text-green-500 animate-pulse md:cursor-pointer" />
                    </button>
                    {truck.length === 0 ? (
                      <p>No trending products</p>
                    ) : (
                      <div
                        ref={truckRef}
                        className="flex overflow-x-auto overflow-y-hidden h-full scroll-smooth snap-x snap-mandatory gap-5 no-scrollbar"
                      >
                        {truck.map((p) => (
                          <ProductCard key={p.id} product={p} />
                        ))}
                      </div>
                    )}
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Trending Cars</h2>
                  <div className="relative">
                    <button
                      type="button"
                      aria-label="scroll Trending products"
                      className="absolute right-1 top-1/2 -translate-y-1/2 z-10 md:transform md:hover:scale-110"
                      onClick={() => {
                        if (trendingRef.current) {
                          trendingRef.current.scrollBy({
                            left: 300,
                            behavior: "smooth",
                          });
                        }
                      }}
                    >
                      <IoIosArrowDroprightCircle className="text-4xl text-green-500 animate-pulse md:cursor-pointer" />
                    </button>
                    {trending.length === 0 ? (
                      <p>No trending products</p>
                    ) : (
                      <div
                        ref={trendingRef}
                        className="flex overflow-x-auto overflow-y-hidden h-full scroll-smooth snap-x snap-mandatory gap-5 no-scrollbar"
                      >
                        {trending.map((p) => (
                          <ProductCard key={p.id} product={p} />
                        ))}
                      </div>
                    )}
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Top Selling</h2>
                  <div className="relative">
                    <button
                      type="button"
                      aria-label="scroll topSelling products"
                      className="absolute right-1 top-1/2 -translate-y-1/2 z-10 md:transform md:hover:scale-110"
                      onClick={() => {
                        if (topsellingRef.current) {
                          topsellingRef.current.scrollBy({
                            left: 300,
                            behavior: "smooth",
                          });
                        }
                      }}
                    >
                      <IoIosArrowDroprightCircle className="text-4xl text-green-500 animate-pulse md:cursor-pointer" />
                    </button>
                    {topselling.length === 0 ? (
                      <p>No trending products</p>
                    ) : (
                      <div
                        ref={topsellingRef}
                        className="flex overflow-x-auto overflow-y-hidden h-full scroll-smooth snap-x snap-mandatory gap-5 no-scrollbar"
                      >
                        {topselling.map((p) => (
                          <ProductCard key={p.id} product={p} />
                        ))}
                      </div>
                    )}
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">New Inventory</h2>
                  {newinventory.length === 0 ? (
                    <p>No new inventory</p>
                  ) : (
                    <div className="relative">
                      <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/70 text-lime-300 p-2 rounded-full z-10"
                      >
                        <IoIosArrowDropleftCircle />
                      </button>
                      <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/70 text-lime-300 p-2 rounded-full z-10"
                      >
                        <IoIosArrowDroprightCircle />
                      </button>

                      <div
                        ref={scrollRef}
                        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-5 overflow-y-hidden no-scrollbar"
                      >
                        {newinventory.map((p) => (
                          <ProductCard key={p.id} product={p} />
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              </>
            )}
            <Link to="/products">
              <button
                type="button"
                className="border border-blue-300 rounded-full px-3 py-2 bg-lime-200 text-lg text-blue-950 font-bold block mx-auto cursor-pointer shadow-lg shadow-indigo-300 md:bg-teal-200 md:hover:bg-linear-to-r md:hover:from-amber-100 md:hover:via-red-300 md:hover:to-blue-300 transition-all duration-200 ease-in-out md:text-xl md:px-5 md:hover:scale-105 md:transform md:mt-10"
              >
                View more Cars
              </button>
            </Link>
          </main>
        </div>
      </div>
      <Link
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-2 right-2.5 z-10 md:right-3.5"
      >
        <FaAnglesUp className="size-10 text-teal-500 md:hover:text-indigo-500" />
      </Link>
    </div>
  );
}

export default Home;
