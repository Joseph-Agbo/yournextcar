import React from 'react'
import { useContext } from 'react'
import ShopContext from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

function UsedCars() {
    const { products } = useContext(ShopContext);
    const usedCars = products.filter((product) => product["used cars"] === true)
    
    return (
    <div className='space-y-10 mb-3'>
        <h1 className='my-8 px-3 font-bold text-2xl'>Used Cars</h1>
    
        {usedCars.length === 0 && (<p>No used cars available</p>)}
    
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-3'>
            {usedCars.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
  )
}

export default UsedCars