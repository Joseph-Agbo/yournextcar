import React from "react";
import { Link } from "react-router-dom";

function formatPrice(p) {
  const price = Number(p);
  if (!Number.isFinite(price)) return p;

  try {
    // Always show exact numeric price from db.json in Nigerian Naira (₦)
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(price);
  } catch (e) {
    // reference the caught error so ESLint doesn't flag an unused variable
    void e;
    return p;
  }
}

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <Link
      to={`/productdetail/${product.id}`}
      className="group block shrink-0 rounded-xl p-3
            border border-slate-100
            bg-linear-to-br from-indigo-950/50 to-blue-950/50
            shadow-lg md:hover:shadow-xl
            shadow-blue-300
            transition-all duration-300 ease-out
            md:hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-44 w-full mb-3 overflow-hidden rounded-lg bg-slate-100">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover
                 transition-transform duration-300
                 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="space-y-1">
        <h3 className="font-semibold text-base text-white line-clamp-1">
          {product.name}
        </h3>

        <p className="text-sm text-black">{product.brand}</p>

        <p className="pt-1 text-lg font-bold text-teal-300">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
