import React, { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    // Use VITE_API_BASE (if set) or fall back to local json-server on port 3001
    const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:3001";
    const url = `${API_BASE}/yournextcar`;

    console.log("Fetching from:", url);

    fetch(url)
      .then((res) => {
        console.log("Response status:", res.status);
        if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        if (!mounted) return;
        // data is expected to be the array of items from json-server
        const items = Array.isArray(data) ? data : [];
        setProducts(items);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        if (!mounted) return;
        setError(err?.message || "Unknown error");
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  const trending = products.filter((p) => Boolean(p.trending));
  const topselling = products.filter((p) => Boolean(p.topselling));
  const newinventory = products.filter((p) => Boolean(p.newinventory));

  const value = {
    products,
    trending,
    topselling,
    newinventory,
    loading,
    error,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export default ShopContext;
