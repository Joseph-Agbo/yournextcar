import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function OurStory() {
    const navigate = useNavigate();
  
    return (
    <div className="bg-blue-950 text-white min-h-screen -mt-20 md:-mt-23">
      <div className="mx-auto w-[90%] py-8">

        {/* Back Button */}
        <div className="flex items-center justify-center relative mb-6 md:mb-7">
            <FaAngleLeft onClick={() => navigate(-1)} className="absolute left-0 size-6 md:cursor-pointer" />
          <p className="text-lg font-semibold md:text-xl">Our Story</p>
        </div>

        {/* Page Content */}
        <div className="space-y-5 leading-7 md:leading-9">

          <p>
            <strong>YourNextCar</strong> began with a simple mission: to make the 
            process of buying a car easier, transparent, and more trustworthy for 
            everyday people. What started as a small car reselling initiative has 
            grown into a trusted platform offering a wide variety of new and used 
            vehicles across Nigeria.
          </p>

          <p>
            Our founders recognized that many buyers struggled with unreliable 
            sellers, lack of clear vehicle history, and inconsistent pricing.  
            To solve this, YourNextCar was built on three key principles:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Transparent vehicle listings with accurate details</li>
            <li>Fair pricing accessible to all customers</li>
            <li>Reliable nationwide delivery and support</li>
          </ul>

          <p>
            Over the years, we have expanded our inventory, partnered with trusted 
            dealers, and improved our technology to bring you a smoother and more 
            enjoyable car-buying experience.
          </p>

          <p>
            Whether you are searching for your first car, upgrading to something 
            better, or exploring premium vehicles, our goal remains the same:  
            **to help you find the perfect car with confidence and peace of mind.**
          </p>

          <p>
            Thank you for choosing <strong>YourNextCar</strong>.  
            Your journey begins here — and we're honored to be part of it.
          </p>

        </div>
      </div>
    </div>
  );
}

export default OurStory;
