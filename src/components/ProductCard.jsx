import React from 'react'

function formatPrice(p) {
  const price = Number(p)
  if (!Number.isFinite(price)) return p

  try {
    // Always show exact numeric price from db.json in Nigerian Naira (₦)
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(price)
  } catch (e) {
    // reference the caught error so ESLint doesn't flag an unused variable
    void e
    return p
  }
}

export default function ProductCard({ product }) {
  if (!product) return null

  return (
    <article className="border rounded-md p-3 shadow-sm bg-white text-slate-800">
      <div className="h-40 w-full mb-2 overflow-hidden rounded">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
  <h3 className="font-semibold text-lg text-blue-950">{product.name}</h3>
      <p className="text-sm text-slate-500">{product.brand}</p>
  <p className="mt-2 font-bold text-blue-950">{formatPrice(product.price)}</p>
      {product.description && (
        <p className="text-sm mt-2 text-slate-600">{product.description}</p>
      )}
    </article>
  )
}
