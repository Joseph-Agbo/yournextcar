import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function VehiclePrice() {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-950 text-white min-h-screen [@media(min-width:768px)_and_(max-width:950px)]:-mt-23">
      <div className="mx-auto w-[90%] py-6 space-y-7">
        {/* Header */}
        <div className="flex items-center justify-center relative">
          <IoArrowBack
            onClick={() => navigate(-1)}
            className="text-xl absolute left-0 md:cursor-pointer size-5 md:size-7"
          />
          <p className="text-lg font-semibold md:text-xl">
            Vehicle Listings & Pricing Policy
          </p>
        </div>

        {/* Section 1 */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">
            1. Accuracy of Vehicle Listings
          </h2>
          <p>
            We strive to ensure that all vehicle information displayed on the
            YourNextCar website is accurate, complete, and up-to-date. However,
            we do not guarantee that every listing will be free from errors,
            such as pricing mistakes, incorrect features, or specification
            discrepancies.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">2. Availability</h2>
          <p>
            All vehicles displayed on our website are subject to availability. A
            vehicle you see listed may already be reserved or sold, even if it
            remains visible on the platform. We recommend contacting us directly
            to confirm availability before making any decisions.
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">3. Pricing & Fees</h2>
          <p>
            Vehicle prices displayed on our website represent the current
            selling price. Additional fees may apply, including:
          </p>

          <ul className="list-disc list-inside marker:text-white space-y-1">
            <li>Registration fees</li>
            <li>Vehicle inspection fees</li>
            <li>Delivery / logistics costs</li>
            <li>Taxes and government charges (where applicable)</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">4. Price Changes</h2>
          <p>
            YourNextCar reserves the right to adjust prices at any time without
            prior notice. Price updates may occur due to market conditions,
            availability, exchange rates, or corrections of previously misstated
            pricing.
          </p>
        </div>

        {/* Section 5 */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">5. Promotions & Discounts</h2>
          <p>
            From time to time, promotional offers or discounts may be provided.
            These offers are subject to specific terms and may be modified or
            withdrawn at our discretion.
          </p>
        </div>

        {/* Section 6 */}
        <div className="space-y-2 pb-10">
          <h2 className="text-xl font-semibold">6. Mispricing Policy</h2>
          <p>
            In the event a vehicle is listed at an incorrect price due to an
            error, YourNextCar reserves the right to refuse or cancel any orders
            placed for the vehicle at the incorrect price. You will be notified
            if such a situation occurs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VehiclePrice;
