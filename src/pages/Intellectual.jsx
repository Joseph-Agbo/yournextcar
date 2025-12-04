import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Intellectual() {
  const navigate = useNavigate();
 
  return (
    <div className="bg-blue-950 text-white min-h-screen -mt-20 md:-mt-23 [@media(min-width:768px)_and_(max-width:950px)]:-mt-23">
      <div className="mx-auto w-[90%] py-8 pb-9">
        <div className="flex items-center justify-center relative mb-6">
            <IoArrowBack onClick={() => navigate(-1)} className="text-xl absolute left-0 size-6 md:cursor-pointer" />
          <p className="text-lg font-semibold md:text-xl">Intellectual Property</p>
        </div>

        <div className="space-y-5">
          <p className="leading-7 md:leading-9">
            This website and all of its content, features, and functionality—
            including but not limited to text, images, logos, graphics, icons,
            vehicle data, pricing information, audio and video materials,
            digital downloads, software, and the overall design—are the
            exclusive property of <strong>YourNextCar</strong> and are protected
            under applicable copyright, trademark, and intellectual property laws.
          </p>

          <p className="leading-7">
            You may view and access the content on this website for personal,
            non-commercial use only. You are <strong>not permitted</strong> to:
          </p>

          <ul className="list-disc list-inside space-y-2 text-white md:leading-8">
            <li>Copy, reproduce, modify, or distribute any part of the website or its materials</li>
            <li>Use dealership trademarks, logos, or branding without written consent</li>
            <li>Access or use vehicle listings, images, or data for commercial or competitor purposes</li>
            <li>Reverse-engineer, extract, or data-mine any portion of the website</li>
          </ul>

          <p className="leading-7 md:leading-8">
            All trademarks, service marks, and logos displayed on this site—whether registered or
            unregistered—are the property of their respective owners. No license or right to use any
            intellectual property is granted unless expressly provided in writing by <strong>YourNextCar</strong>.
          </p>

          <p className="leading-7">
            Any unauthorized use of the website or its content may violate copyright, trademark, or
            other applicable laws and may result in legal action.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intellectual;
