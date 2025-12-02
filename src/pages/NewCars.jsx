import React from 'react'
import { useContext } from 'react'
import ShopContext from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

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
        <Link to="/profile">
            <div className="border border-pink-950 w-[20%] rounded-md flex justify-center items-center p-4 bg-pink-950 fixed top-1/2 left-3.5 z-10 md:size-20 md:w-[9%] md:hover:bg-blue-900 md:transition-all duration-300 ">
                <CgProfile className="size-10 bg-gray-200 text-teal-800 rounded-lg max-[330px]:size-8" />
            </div>
        </Link>
    </div>
  )
}

export default NewCars