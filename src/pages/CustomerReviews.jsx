import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function CustomerReviews() {
    const navigate = useNavigate();
  
    return (
    <div className="bg-blue-950 text-white min-h-screen -mt-20 md:-mt-23">
      <div className="mx-auto w-[90%] py-8">

        {/* Back Button */}
        <div className="flex items-center justify-center relative mb-6 md:mb-7">
          <FaAngleLeft onClick={() => navigate(-1)} className="absolute left-0 size-6 md:cursor-pointer" />
          <p className="text-lg font-semibold md:text-xl">Customer Reviews</p>
        </div>

        {/* Page Content */}
        <div className="space-y-7 leading-7 md:leading-8">

          <p>
            At <strong>YourNextCar</strong>, customer satisfaction is our top priority. 
            We are proud to have earned the trust of buyers across Nigeria who have 
            chosen us for transparent service, quality vehicles, and a seamless 
            car-buying experience.
          </p>

          <p>Here's what some of our customers have to say:</p>

          {/* Review 1 */}
          <div className="bg-blue-900/40 p-4 rounded-lg space-y-2">
            <p className="font-semibold text-indigo-100">⭐ ⭐ ⭐ ⭐ ⭐ - Ahmed, Lagos</p>
            <p>
              “I found exactly the car I wanted and the price was fair. Delivery to my 
              location was fast and stress-free. Highly recommended!”
            </p>
          </div>

          {/* Review 2 */}
          <div className="bg-blue-900/40 p-4 rounded-lg space-y-2">
            <p className="font-semibold text-indigo-100">⭐ ⭐ ⭐ ⭐ ⭐ - Chiamaka, Abuja</p>
            <p>
              “YourNextCar made buying my first car so easy. The details were accurate, 
              and customer support guided me through every step.”
            </p>
          </div>

          {/* Review 3 */}
          <div className="bg-blue-900/40 p-4 rounded-lg space-y-2">
            <p className="font-semibold text-indigo-100">⭐ ⭐ ⭐ ⭐ - Daniel, Port Harcourt</p>
            <p>
              “Great experience overall. The car was in good condition, just as listed. 
              I appreciate the transparency and professionalism.”
            </p>
          </div>

          {/* Review 4 */}
          <div className="bg-blue-900/40 p-4 rounded-lg space-y-2">
            <p className="font-semibold text-indigo-100">⭐ ⭐ ⭐ ⭐ ⭐ - Blessing, Enugu</p>
            <p>
              “Amazing service! They helped me compare vehicles and choose the right one 
              for my budget. Delivery was smooth and timely.”
            </p>
          </div>

          <p>
            We continue to work hard every day to deliver a trusted and enjoyable 
            experience for every customer.  
            If you've purchased a vehicle from us, we'd love to hear your story too!
          </p>

        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;
