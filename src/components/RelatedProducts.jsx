import React from 'react'
import { useContext } from "react";
import ShopContext from "../context/ShopContext";
import ProductCard from "./ProductCard";

function RelatedProducts({ currentProductId, currentProductBrand}) {
  const { products } = useContext(ShopContext)
  const related = products.filter((product) => product.brand === currentProductBrand && product.id != currentProductId)
  
  return (
    
    <div>
      <h2 className='font-bold text-2xl my-4 px-3 md:my-5'>Related Products</h2>

      {
        related.length === 0 && (<p>No related products found</p>)
      }

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-3'>
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts