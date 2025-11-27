import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { FaImages } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { useContext } from "react";
import ShopContext from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { IoIosNotifications } from "react-icons/io";
import { LiaAngleDoubleRightSolid } from "react-icons/lia"
import { MdLiveHelp } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

function ProfilePage() {
    const {products} = useContext(ShopContext)
    const paid = products.filter((product) => product.paid)
  
  
    return (
    <div className='mx-auto w-[90%] pt-6 pb-4'>
        <div className='space-y-7'>
            <div className='flex justify-between items-center'>
                <section>
                    <IoIosArrowRoundBack className='size-7' />
                </section>
                <section>
                    <p className='font-bold'>My Profile</p>
                </section>
                <section>
                    <IoSettings className='size-7 font-bold text-black' />
                </section>
            </div>
            <div className='flex flex-col items-center'>
                <section className="border border-pink-950 w-[29%] rounded-full flex justify-center items-center p-8 bg-pink-950 max-[380px]:w-[32%] max-[330px]:w-[37%]">
                    <FaImages className="size-10 bg-gray-200 text-teal-800 rounded-md" />
                </section>
                <section className='mt-3'>
                    <p className='space-y-6 text-black'>Name</p>
                </section>
                <section>
                    <p className='space-y-6 text-blue-950'>Email</p>
                </section>
            </div>
            <div className='pt-4'>
                <div className='flex justify-between py-4'>
                    <p className='font-semibold'>Personal Details</p>
                    <span className='flex items-center gap-x-1.5'>
                        <FaPen className='size-3.5 text-blue-900' />
                        <span className='text-blue-900'>
                            Edit
                        </span>
                    </span>
                </div>
                <div className='space-y-3'>
                    <hr className='text-gray-300' />
                    <p className='flex justify-between text-blue-950'><span>Name</span> <span>Joseph Agbo</span></p>
                    <hr className='text-gray-300'  />
                    <p className='flex justify-between text-blue-950'><span>Phone</span> <span>09046561376</span></p>
                    <hr className='text-gray-300'  />
                    <p className='flex justify-between text-blue-950'><span>Email</span> <span>xavimoney@gmail.com</span></p>
                </div>
                <div className='space-y-4 py-6'>
                    <h2 className='font-bold'>My Purchased Cars</h2>
                    <div className='flex overflow-x-auto gap-4 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible'>
                        {
                            paid.map((product) => (
                                <ProductCard key={product.id} product={product}/>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <p className='flex justify-between space-y-3'><span className='font-semibold text-black'>My Wishlist</span> <span className='text-blue-900 text-sm'>View All</span></p>
                    <div>
                        <div className='flex justify-between items-center space-y-2 py-2'>
                            <div className='flex gap-x-1'>
                                <img src="/newcars/2025toyotajeep.jpeg" className='size-10' alt="Toyota Jeep" />
                                <div>
                                    <p>car.name</p>
                                    <p>car.brand</p>
                                </div>
                            </div>
                            <div>
                                <button className='bg-blue-950 text-white rounded-xl py-1 px-2 text-sm'>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-x-1'>
                                <img src="/newcars/2018hyundaitucson.jpeg" className='size-10' alt="Hyundai Tucson" />
                                <div>
                                    <p>car.name</p>
                                    <p>car.brand</p>
                                </div>
                            </div>
                            <div>
                                <button className='bg-blue-950 text-white rounded-xl py-1 px-2 text-sm'>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-5 py-3'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <IoIosNotifications />
                        <p className='text-blue-950'>Notification Preferences</p>
                    </div>
                    <LiaAngleDoubleRightSolid />
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <MdLiveHelp />
                        <p className='text-blue-950'>Help & Support</p>
                    </div>
                    <LiaAngleDoubleRightSolid />
                </div>
                <div className='flex gap-x-2 items-center'>
                    <IoIosLogOut />
                    <p className='text-red-500'>Logout</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage