import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { PiAddressBookFill } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbClockHour4 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function ContactInfo() {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-950">
      <div className="mx-auto w-[90%] bg-blue-950">
        <div className="pt-6 pb-10 space-y-7">
          <div>
            <div className="relative flex justify-center text-2xl text-white mb-5">
              <p onClick={() => navigate(-1)}>
                <FaAngleLeft className="absolute left-0 top-1 md:cursor-pointer" />
              </p>
              <p className="font-semibold">Contact Us</p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/images/company.jpeg"
                className="rounded-lg w-full md:w-[90%]"
                alt="Company Building"
              />
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-white font-bold text-3xl mb-6">
                YourNextCar
              </h2>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center gap-x-4 text-white font-semibold ">
                <PiAddressBookFill className="size-6 text-blue-200" />
                <p className="text-md">
                  No 16 Afikpo Road Abakaliki, Ebonyi state
                </p>
              </div>
              <div className="flex items-center gap-x-4 text-white font-semibold">
                <FaPhoneAlt className="size-6 text-blue-200" />
                <p className="text-md"> 09046561376, 07078454937</p>
              </div>
              <div className="flex items-center gap-x-4 text-white font-semibold">
                <MdEmail className="size-6 text-blue-200" />
                <p className="text-md">xavimoney@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="text-white">
            <div className="flex items-center gap-x-4 font-semibold text-white mb-5">
              <TbClockHour4 className="text-blue-200 size-6" />
              <p className="font-bold">Operating Hours</p>
            </div>
            <div className="space-y-2">
              <p className="flex justify-between text-md">
                <span>Monday - Friday</span> <span>9:00 AM - 6:00 PM</span>
              </p>
              <p className="flex justify-between text-md">
                <span>Sunday</span> <span>Closed</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
