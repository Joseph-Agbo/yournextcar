import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Terms() {
    const navigate = useNavigate();
  
    return (
    <div className='bg-blue-950'>
        <div className='text-white space-y-7 pt-7 pb-10 mx-auto w-[90%]'>
            <div className='relative flex justify-center '>
                <IoArrowBack onClick={() => navigate(-1)} className='absolute left-0 size-6 md:size-7' />
                <p className='font-semibold text-lg md:text-xl'>Terms & Conditions</p>
            </div>
            <p className='font-semibold md:text-lg'>Last Updated: December 1, 2025</p>
            <div className='space-y-4'>
                <h2 className='font-semibold text-xl md:text-2xl'>Introduction</h2>
                <p className='md:text-lg'>This document outlines the terms and conditions <br className='md:hidden' /> governing your use of our website and services. <br className='md:hidden' /> By accessing or using our website, you agree <br className='hidden md:inline' /> to be <br className='md:hidden' /> bound by these terms. Please read them carefully.</p>
            </div>
            <div className='space-y-5 mt-10'>
                <div className=' bg-white text-black rounded-sm p-1 font-semibold md:p-3 md:text-md'>
                    <p><Link to="/useofwebsite" className='flex justify-between items-center'>Use of Website <FaAngleRight className='size-4' /></Link></p>
                </div>
                <div className=' bg-white text-black rounded-sm p-1 font-semibold md:p-3 md:text-md'>
                    <p><Link to="/vehicleprice" className='flex justify-between items-center'>Vehicle Listings & Pricing <FaAngleRight className='size-4' /></Link></p>
                </div>
                <div className=' bg-white text-black rounded-sm p-1 font-semibold md:p-3 md:text-md'>
                    <p><Link to="/intellectual" className='flex justify-between items-center'>Intellectual Property <FaAngleRight className='size-4' /></Link></p>
                </div>
                <div className=' bg-white text-black rounded-sm p-1 font-semibold md:p-3 md:text-md'>
                    <p><Link to="/limit" className='flex justify-between items-center'>Limitation of Liability <FaAngleRight className='size-4' /></Link></p>
                </div>
                <div className=' bg-white text-black rounded-sm p-1 font-semibold md:p-3 md:text-md'>
                     <p><Link to="/govern" className='flex justify-between items-center'>Governing Law <FaAngleRight className='size-4' /></Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Terms