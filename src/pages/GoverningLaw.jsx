import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function GoverningLaw() {
    const navigate = useNavigate();
  
  
    return (
    <div className="bg-blue-950 text-white min-h-screen [@media(min-width:768px)_and_(max-width:950px)]:-mt-23">
      <div className="mx-auto w-[90%] py-8">

        {/* Header */}
        <div className="flex items-center justify-center relative mb-6">
            <IoArrowBack onClick={() => navigate(-1)} className="text-xl absolute left-0 size-5 md:cursor-pointer md:size-7" />
          <p className="text-lg font-semibold md:text-xl">Governing Law</p>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="leading-7 md:leading-9">
            These Terms and Conditions, as well as any disputes or claims arising 
            from your use of this website, shall be governed and interpreted in 
            accordance with the laws of <strong>Nigeria</strong>, without regard to 
            its conflict of law principles.
          </p>

          <p className="leading-7 md:leading-9">
            By accessing and using this website, you agree that any legal action, 
            claim, or dispute arising out of or related to these Terms or your use 
            of the Site shall be brought exclusively before the competent courts 
            located within <strong>Nigeria</strong>.
          </p>

          <p className="leading-7">
            You also agree to submit to the personal jurisdiction of these courts 
            and waive any objection to the venue or convenience of these locations.
          </p>

          <p className="leading-7 md:leading-9">
            If any provision within these Terms is found to be invalid or 
            unenforceable under applicable law, the remaining provisions shall 
            continue to remain in full force and effect.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GoverningLaw;
