import ProductCard from "../components/ProductCard";
import { AiOutlineSearch } from "react-icons/ai";
import { useContext, useState, useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

function Home() {
  const { products, trending, topselling, newinventory, loading, error } =
    useContext(ShopContext);

  const [query, setQuery] = useState("");

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

  return (
    <div>
      <div className="bg-[url(/images/bg-image.jpeg)] text-lime-300 text-center text-3xl mx-auto bg-cover bg-no-repeat h-[80vh] flex flex-col justify-center items-center md:bg-[url(/images/luxury.jpeg)] md:h-[83vh] md:text-4xl md:text-teal-300">
        <h1 className=" md:text-6xl font-bold">YourNextCar</h1>
        <p>
          Find the perfect vehicle for your lifestyle — new and used cars, all
          in one place.
        </p>
      </div>
      {/* Mobile-only horizontal search bar placed before title */}
      <div className="w-full flex justify-center md:hidden pt-6">
        <div className="w-[95%] flex items-center gap-3 bg-white/90 rounded-full px-3 py-2 border border-gray-400 shadow-lg shadow-indigo-300">
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
      <div className="max-w-6xl mx-auto px-4 py-10">
        {loading && <p className="text-center">Loading products…</p>}
        {error && <p className="text-center text-red-600">Error: {error}</p>}

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
              <h2 className="text-2xl font-semibold mb-4">Trending Cars</h2>
              {trending.length === 0 ? (
                <p>No trending products</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {trending.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Top Selling</h2>
              {topselling.length === 0 ? (
                <p>No top selling products</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {topselling.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">New Inventory</h2>
              {newinventory.length === 0 ? (
                <p>No new inventory</p>
              ) : (
                <div className="relative">
                  <button
                    onClick={scrollLeft}
                    className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 bg-black/70 text-lime-300 p-2 rounded-full z-10"
                  >
                    <IoIosArrowDropleftCircle />
                  </button>
                  <button
                    onClick={scrollRight}
                    className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 bg-black/70 text-lime-300 p-2 rounded-full z-10"
                  >
                    <IoIosArrowDroprightCircle />
                  </button>

                  <div ref={scrollRef} className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-5 sm:grid sm:grid-cols-2 md:grid-cols-3 md:overflow-visible">
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
          <button type="button" className="border border-blue-300 rounded-full px-3 py-2 bg-lime-200 text-lg text-blue-950 font-bold block mx-auto cursor-pointer shadow-lg shadow-indigo-300 md:bg-teal-200 md:hover:bg-linear-to-r md:hover:from-amber-100 md:hover:via-red-300 md:hover:to-blue-300 transition-all duration-200 ease-in-out md:text-xl md:px-5 md:hover:scale-105 md:transform">
            View more Cars
          </button>
        </Link>
      </div>
      <Link to="/profile">
        <div className="border border-pink-950 w-[20%] rounded-md flex justify-center items-center p-4 bg-pink-950 fixed top-1/2 left-3.5 z-10 md:size-20 md:w-[9%] md:hover:bg-blue-900 md:transition-all duration-300 ">
          <CgProfile className="size-10 bg-gray-200 text-teal-800 rounded-lg max-[330px]:size-8" />
        </div>
      </Link>
    </div>
  );
}

export default Home;
