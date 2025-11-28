import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { FaImages } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { useContext } from "react";
import ShopContext from "../context/ShopContext";
import ProductCard from "../components/ProductCard";
import { IoIosNotifications } from "react-icons/io";
import { LiaAngleDoubleRightSolid } from "react-icons/lia";
import { MdLiveHelp } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { PiCarProfileBold } from "react-icons/pi";
import { TbJewishStarFilled } from "react-icons/tb";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";

function ProfilePage() {
  const { products } = useContext(ShopContext);
  const paid = products.filter((product) => product.paid);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="mx-auto w-[90%] pt-6 pb-4 md:pt-0 md:flex md:justify-between md:gap-8">
      <div className="hidden md:block mx-auto w-[50%]">
        <div className="flex items-center gap-x-1 px-5 py-3">
          <div className="size-8">
            <img src="/images/carlogo.jpeg" alt="CarLogo" />
          </div>
          <p className="text-lg text-blue-950 font-bold">YourNextCar</p>
        </div>
        <div className="flex px-4 gap-x-2 pt-4">
          <div className="border border-pink-950 w-[20%] p-3 rounded-full bg-pink-950">
            <FaImages className="size-5 bg-gray-200 text-teal-800 rounded-md" />
          </div>
          <div>
            <p>Joseph Agbo</p>
            <p>xavimoney@gmail.com</p>
          </div>
        </div>
        <div className="mt-11">
          <button className="flex items-center gap-x-2 p-2 ml-5 rounded-md w-[80%] hover:border hover:border-blue-200 text-blue-950 hover:text-blue-900 cursor-pointer hover:bg-blue-200">
            <IoPersonSharp />
            Profile Details
          </button>
          <button className="flex items-center gap-x-2 p-2 ml-5 rounded-md w-[80%] hover:border hover:border-blue-200 text-blue-950 hover:text-blue-900 cursor-pointer hover:bg-blue-200">
            <IoSettings className="size-4 font-bold" />
            Account Settings
          </button>
          <button className="flex items-center gap-x-2 p-2 ml-5 rounded-md w-[80%] hover:border hover:border-blue-200 text-blue-950 hover:text-blue-900 cursor-pointer hover:bg-blue-200">
            <PiCarProfileBold />
            My Purchased Cars
          </button>
          <button className="flex items-center gap-x-2 p-2 ml-5 rounded-md w-[80%] hover:border hover:border-blue-200 text-blue-950 hover:text-blue-900 cursor-pointer hover:bg-blue-200">
            <TbJewishStarFilled />
            Wishlist
          </button>
          <button className="flex items-center gap-x-2 p-2 ml-5 rounded-md w-[80%] hover:border hover:border-blue-200 text-blue-950 hover:text-blue-900 cursor-pointer hover:bg-blue-200">
            <MdLiveHelp />
            Help & Support
          </button>
          <Link to="/loginform">
            <button
              title="Logout"
              className="flex items-center mt-88 gap-x-2 p-2 ml-5 rounded-md w-[80%] hover:border hover:border-blue-200 text-red-600 hover:text-blue-900 cursor-pointer hover:bg-blue-200"
            >
              <IoIosLogOut className="text-blue-950" />
              Logout
            </button>
          </Link>
        </div>
      </div>
      <div className="space-y-7">
        <div className="flex justify-between items-center">
          <section>
            <Link to="/">
              <IoIosArrowRoundBack className="size-7 md:hidden" />
            </Link>
          </section>
          <section className="md:hidden">
            <p className="font-bold">My Profile</p>
          </section>
          <section className="md:hidden relative">
            <IoSettings
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className=" size-6 font-bold text-black"
            />
            {isSettingsOpen && (
              <div className=" absolute right-0 z-70 shadow-lg rounded-lg min-w-50 mt-2 p-3 space-y-2 bg-white transition-all ease-in-out duration-300">
                <p className="py-1 px-1 text-blue-900 rounded ">
                  Change Password
                </p>
                <p className="py-1 px-1 text-blue-900 rounded ">
                  Notifications
                </p>
                <p className="py-1 px-1 text-blue-900 rounded flex items-center gap-x-1 ">Dark Mode <FaMoon className="size-3" /> </p>
                <p className="py-1 px-1 text-blue-900 rounded ">
                  Delete account
                </p>
                <p className="py-1 px-1 text-blue-900 rounded ">About YNC</p>
                <p className="py-1 px-1 text-red-800 rounded ">Logout</p>
              </div>
            )}
          </section>
        </div>
        <div className="flex flex-col items-center md:hidden">
          <section className="border border-pink-950 w-[29%] rounded-full flex justify-center items-center p-8 bg-pink-950 max-[380px]:w-[32%] max-[330px]:w-[37%]">
            <FaImages className="size-10 bg-gray-200 text-teal-800 rounded-md" />
          </section>
          <section className="mt-3">
            <p className="space-y-6 text-black">Name</p>
          </section>
          <section>
            <p className="space-y-6 text-blue-950">Email</p>
          </section>
        </div>
        <div className="pt-4 md:pt-0">
          <div className="hidden md:flex md:justify-between">
            <p className="text-blue-950">
              <span className="font-bold text-black text-xl">Hello, Xavi!</span>{" "}
              <br /> Welcome back, Here you can manage your profile and view
              your activity.
            </p>
            <button
              title="Edit"
              className="border rounded-md h-9 px-3 py-1 text-md cursor-pointer bg-blue-900 text-white"
            >
              Edit Profile
            </button>
          </div>
          <div className="flex justify-between py-4">
            <p className="font-semibold md:font-bold">Personal Details</p>
            <span className="flex items-center gap-x-1.5 md:hidden">
              <FaPen className="size-3.5 text-blue-900" />
              <span className="text-blue-900">Edit</span>
            </span>
          </div>
          <div className="space-y-3">
            <hr className="text-gray-300" />
            <p className="flex justify-between text-blue-950 ">
              <span className="md:hidden">Name</span>
              <span className="hidden md:flex">
                Full Name <br /> Agbo Joseph
              </span>{" "}
              <span className="hidden md:flex md:pr-50">
                Email <br /> xavimoney500@gmail.com
              </span>
              <span className="md:hidden">Joseph Agbo</span>
            </p>
            <hr className="text-gray-300" />
            <p className="flex justify-between text-blue-950">
              <span className="md:hidden">Phone</span>
              <span className="hidden md:flex">
                Phone Number <br /> 09046561376
              </span>{" "}
              <span className="hidden md:flex md:pr-42">
                Address <br /> No 27 Emeofor Street Abakaliki
              </span>
              <span className="md:hidden">09046561376</span>
            </p>
            <hr className="text-gray-300 md:hidden" />
            <p className="flex justify-between text-blue-950 md:hidden">
              <span>Email</span> <span>xavimoney@gmail.com</span>
            </p>
          </div>
          <div className="space-y-4 py-6">
            <h2 className="font-bold">My Purchased Cars</h2>
            <div className="flex overflow-x-auto gap-4 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible">
              {paid.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div>
            <p className="flex justify-between space-y-3 md:hidden">
              <span className="font-semibold text-black">My Wishlist</span>{" "}
              <span className="text-blue-900 text-sm">View All</span>
            </p>
            <div className="md:hidden">
              <div className="flex justify-between items-center space-y-2 py-2">
                <div className="flex gap-x-1">
                  <img
                    src="/newcars/2025toyotajeep.jpeg"
                    className="size-10"
                    alt="Toyota Jeep"
                  />
                  <div>
                    <p>car.name</p>
                    <p>car.brand</p>
                  </div>
                </div>
                <div>
                  <button className="bg-blue-950 text-white rounded-xl py-1 px-2 text-sm">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-x-1">
                  <img
                    src="/newcars/2018hyundaitucson.jpeg"
                    className="size-10"
                    alt="Hyundai Tucson"
                  />
                  <div>
                    <p>car.name</p>
                    <p>car.brand</p>
                  </div>
                </div>
                <div>
                  <button className="bg-blue-950 text-white rounded-xl py-1 px-2 text-sm">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-5 py-4 md:hidden">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <IoIosNotifications />
              <p className="text-blue-950">Notification Preferences</p>
            </div>
            <LiaAngleDoubleRightSolid />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <MdLiveHelp />
              <p className="text-blue-950">Help & Support</p>
            </div>
            <LiaAngleDoubleRightSolid />
          </div>
          <Link to="/loginform" className="flex gap-x-2 items-center">
            <IoIosLogOut />
            <p className="text-red-500">Logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
