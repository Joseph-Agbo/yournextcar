import React, { useContext, useState } from 'react'
import ShopContext from '../context/ShopContext'
import ProductCard from '../components/ProductCard'
import { AiOutlineSearch } from 'react-icons/ai'

function Home() {
  const { products, trending, topselling, newinventory, loading, error } = useContext(ShopContext)
  const [query, setQuery] = useState('')
  const filtered = query.trim() ? products.filter(p => p && p.name && p.name.toLowerCase().includes(query.trim().toLowerCase())) : null

  return (
    <div>
      <div className='bg-[url(/images/bg-image.jpeg)] text-lime-300 text-center text-3xl mx-auto bg-cover bg-no-repeat h-[80vh] flex flex-col justify-center items-center md:bg-[url(/images/luxury.jpeg)] md:h-[83vh] md:text-4xl md:text-teal-300'>
        <h1 className=" md:text-6xl font-bold">YourNextCar</h1>
        <p>Find the perfect vehicle for your lifestyle — new and used cars, all in one place.</p>
      </div>
        {/* Mobile-only horizontal search bar placed before title */}
        <div className="w-full flex justify-center md:hidden pt-6">
          <div className="w-[95%] flex items-center gap-3 bg-white/90 rounded-full px-3 py-2 shadow border border-gray-400">
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
                <h2 className="text-2xl font-semibold mb-4">Search results for "{query}"</h2>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {newinventory.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </div>
  )
}

export default Home