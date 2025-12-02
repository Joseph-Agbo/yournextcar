import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function OurTeam() {
    const navigate = useNavigate();
  
    return (
    <div className="bg-blue-950 text-white min-h-screen">
      <div className="mx-auto w-[90%] py-8">

        {/* Back Button */}
        <div className="flex items-center justify-center relative mb-6 md:mb-7">
          <FaAngleLeft onClick={() => navigate(-1)} className="absolute left-0 size-6 md:cursor-pointer" />
          <p className="text-lg font-semibold md:text-xl">Our Team</p>
        </div>

        {/* Page Content */}
        <div className="space-y-5 leading-7 md:leading-9">

          <p>
            At <strong>YourNextCar</strong>, every successful car purchase is backed 
            by a dedicated team working behind the scenes to deliver honesty, 
            professionalism, and an exceptional customer experience.
          </p>

          <p>
            Our team is made up of passionate individuals who believe that buying 
            a car should be simple, straightforward, and stress-free. Each 
            department plays a vital role in making YourNextCar a trusted name in 
            Nigeria's automotive space.
          </p>

          <h3 className="text-xl font-semibold">Leadership & Management</h3>
          <p>
            Our leadership team guides the vision of YourNextCar with a strong 
            focus on transparency, customer satisfaction, and continuous 
            innovation. They ensure our services meet the highest standards.
          </p>

          <h3 className="text-xl font-semibold">Sales Team</h3>
          <p>
            Our friendly and knowledgeable sales professionals help customers find 
            vehicles that fit their needs and budget. From first-time buyers to 
            premium car seekers, they ensure a smooth and informative process.
          </p>

          <h3 className="text-xl font-semibold">Finance & Support Staff</h3>
          <p>
            This team works closely with customers to explain pricing, payment 
            options, documentation, and verification. Their goal is to keep 
            everything clear, fair, and secure.
          </p>

          <h3 className="text-xl font-semibold">Inspection & Quality Control</h3>
          <p>
            Our inspection specialists carefully verify vehicle condition, history, 
            and performance before any listing goes live on our platform, ensuring 
            that customers always get accurate information.
          </p>

          <h3 className="text-xl font-semibold">Customer Service Team</h3>
          <p>
            Whether you're asking questions, requesting guidance, or tracking a 
            purchase, our customer service team is always ready to help with 
            patience and professionalism.
          </p>

          <p>
            At <strong>YourNextCar</strong>, we believe our people are our biggest 
            strength. Their combined expertise, passion, and commitment allow us 
            to deliver a trusted, hassle-free experience to customers across 
            Nigeria.
          </p>

        </div>
      </div>
    </div>
  );
}

export default OurTeam;
