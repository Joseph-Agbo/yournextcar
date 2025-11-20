import React from 'react'
import { useContext } from 'react'
import ShopContext from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

function NewCars() {
    const { products } = useContext(ShopContext);
    const newCars = products.filter((product) => product["new cars"] === true)
  
    return (
    <div className='space-y-10 mb-3'>
        <h1 className='my-8 px-3 font-bold text-2xl'>New Cars</h1>

        {newCars.length === 0 && (<p>No new cars available</p>)}

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-3'>
            {newCars.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
  )
}

export default NewCars