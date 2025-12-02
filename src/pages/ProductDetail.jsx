import React from 'react'
import ShopContext from '../context/ShopContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FaNairaSign } from "react-icons/fa6";
import RelatedProducts from '../components/RelatedProducts';
import { Link } from "react-router-dom";

function ProductDetail() {
    const param = useParams()
    const productId = param.id
    const {products} = useContext(ShopContext)
  
    const specificProduct = products.find((product) => product.id == productId)
  
    return (
    <div className='mb-3'>
        <div className='flex flex-col gap-4 items-center p-5 md:flex md:justify-around md:flex-row md:gap-5'>
            <div className='space-y-3'>
                <h2 className='font-bold text-md text-slate-500'>{specificProduct?.brand}</h2>
                <img src={specificProduct?.img} alt="" className='width-[80%] h-[50vh] md:h-[70vh]' />
            </div>
            <div className='space-y-4 md:flex md:flex-col'>
                <h1 className='font-bold text-xl text-blue-950'>{specificProduct?.name}</h1>
                <p className='text-slate-600'>{specificProduct?.description}</p>
                <p className='text-blue-950 flex items-center font-bold text-lg'><FaNairaSign />{specificProduct?.price}</p>
                <Link to={`/checkout/${specificProduct?.id}`} ><button type='button' className='border rounded-sm w-full text-md p-2 bg-blue-950 text-white md:p-3 md:w-[80%] md:cursor-pointer md:hover:bg-blue-900 md:transition-all duration-300'>Buy Now</button></Link>
            </div>
        </div>
        <RelatedProducts currentProductId={specificProduct?.id} currentProductBrand={specificProduct?.brand} />
    </div>
  )
}

export default ProductDetail