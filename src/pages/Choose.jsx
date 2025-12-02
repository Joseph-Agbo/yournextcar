import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Choose() {
    const navigate = useNavigate()
  
    return (
    <div className="bg-blue-950 text-white min-h-screen">
      <div className="mx-auto w-[90%] py-8">

        {/* Back Button */}
        <div className="flex items-center justify-center relative mb-6 md:mb-7">
          <FaAngleLeft onClick={() => navigate(-1)} className="absolute left-0 size-6 md:cursor-pointer" />
          <p className="text-lg font-semibold md:text-xl">Why Choose Us</p>
        </div>

        {/* Page Content */}
        <div className="space-y-5 leading-7 md:leading-9">

          <p>
            At <strong>YourNextCar</strong>, we understand that buying a vehicle is a major
            decision. That's why we are committed to providing a transparent, reliable, 
            and customer-focused experience from start to finish.
          </p>

          <p>
            Over the years, customers across Nigeria have trusted us because we offer 
            more than just cars — we deliver confidence, convenience, and value.
          </p>

          <h3 className="text-xl font-semibold">1. Wide Selection of Vehicles</h3>
          <p>
            From affordable everyday cars to premium and luxury options, we offer a 
            diverse inventory to match every budget and lifestyle.
          </p>

          <h3 className="text-xl font-semibold">2. Honest & Transparent Pricing</h3>
          <p>
            No hidden charges. No sudden surprises. Every vehicle comes with clear, 
            upfront pricing so you always know exactly what you're paying for.
          </p>

          <h3 className="text-xl font-semibold">3. Verified Vehicle Information</h3>
          <p>
            Our team inspects and reviews every listing to ensure accuracy. Mileage, 
            condition, history — everything is clearly provided for your peace of mind.
          </p>

          <h3 className="text-xl font-semibold">4. Reliable Customer Support</h3>
          <p>
            Whether you're buying, exploring options, or asking questions, our support 
            team is always ready to help you make an informed decision.
          </p>

          <h3 className="text-xl font-semibold">5. Smooth and Convenient Process</h3>
          <p>
            From browsing to final purchase, we make the journey seamless. We eliminate 
            unnecessary stress so you can focus on choosing the perfect car.
          </p>

          <h3 className="text-xl font-semibold">6. Trusted Reputation</h3>
          <p>
            Thousands of customers have relied on <strong>YourNextCar</strong> for honest service 
            and quality vehicles. Our reliability is what keeps people coming back.
          </p>

          <p>
            At the end of the day, our mission is simple:{" "}  
            <strong>to help you buy the right car with confidence and ease.</strong>
          </p>

          <p>
            Choose <strong>YourNextCar</strong> — because you deserve a dealership that puts you first.
          </p>

        </div>
      </div>
    </div>
  );
}

export default Choose;
