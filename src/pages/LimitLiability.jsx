import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function LimitLiability() {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-950 text-white min-h-screen">
      <div className="mx-auto w-[90%] py-8">
        {/* Header */}
        <div className="flex items-center justify-center relative mb-6">
          <IoArrowBack
            onClick={() => navigate(-1)}
            className="text-xl absolute left-0 size-5 cursor-pointer md:size-7"
          />
          <p className="text-lg font-semibold md:text-xl">Limitation of Liability</p>
        </div>

        {/* Content */}
        <div className="space-y-4 text-white">
          <p className="leading-7 md:leading-8">
            To the fullest extent permitted by law, <strong>YourNextCar</strong>
            {" "}is not responsible or liable for any direct, indirect, incidental,
            special, consequential, or punitive damages that may arise from your
            use of this website or any products, services, or information
            obtained from it.
          </p>

          <p className="leading-7">This includes, but is not limited to, damages related to:</p>

          <ul className="list-disc list-inside space-y-1 leading-7 md:leading-8">
            <li>Website errors, technical issues, or downtime</li>
            <li>Inaccurate vehicle information, pricing, or availability</li>
            <li>Third-party links, advertisements, or external websites</li>
            <li>Loss of data, revenue, profits, or business opportunities</li>
            <li>Unauthorized access to your information or account</li>
          </ul>

          <p className="leading-7 md:leading-8">
            All vehicle listings, descriptions, prices, and availability
            displayed on this website are provided “as is” and “as available.”
            <strong> YourNextCar makes no guarantees</strong> regarding
            accuracy, reliability, or completeness.
          </p>

          <p className="leading-7">
            You agree that your use of the website is entirely at your own risk.
            If you are dissatisfied with any part of the website, your only
            remedy is to stop using it.
          </p>

          <p className="leading-7">
            Nothing in this Limitation of Liability is intended to exclude or
            restrict any rights granted to you under applicable consumer
            protection laws.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LimitLiability;
