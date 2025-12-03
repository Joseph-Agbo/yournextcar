import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Delivery() {
    const navigate = useNavigate();
  
    return (
    <div className="bg-blue-950 text-white min-h-screen -mt-20 md:-mt-23">
      <div className="mx-auto w-[90%] py-8">

        {/* Back Button */}
        <div className="flex items-center justify-center relative mb-6 md:mb-7">
           <FaAngleLeft onClick={() => navigate(-1)} className="absolute left-0 size-6 md:cursor-pointer" />
          <p className="text-lg font-semibold md:text-xl">Delivery & Logistics</p>
        </div>

        {/* Page Content */}
        <div className="space-y-5 leading-7 md:leading-9">

          <p>
            At <strong>YourNextCar</strong>, we are committed to delivering your vehicle 
            safely, promptly, and efficiently. Our logistics process is designed to ensure 
            that every customer receives their car in excellent condition, wherever they are located in Nigeria.
          </p>

          <p>
            Our delivery services include:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Careful handling and transportation of vehicles</li>
            <li>Tracking and updates throughout the delivery process</li>
            <li>Nationwide coverage, ensuring your car reaches you wherever you are</li>
            <li>Timely delivery aligned with agreed schedules</li>
          </ul>

          <p>
            We partner with trusted logistics companies to provide reliable transportation 
            and reduce the risk of damage or delay. Our team ensures that all paperwork, 
            registration, and necessary inspections are handled smoothly for your convenience.
          </p>

          <p>
            Your satisfaction is our priority — from browsing our inventory to receiving your car, 
            {" "} <strong>YourNextCar</strong> is dedicated to a seamless and trustworthy experience.
          </p>

          <p>
            For questions or assistance with delivery, please contact our support team. 
            We're here to make your vehicle purchase and delivery as stress-free as possible.
          </p>

        </div>
      </div>
    </div>
  );
}

export default Delivery;
