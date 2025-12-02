import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const isContactInfo = location.pathname === "/contact";
  const isTerms = location.pathname === "/terms";
  const isUseOfWebsite = location.pathname === "/useofwebsite";
  const isVehiclePrice = location.pathname === "/vehicleprice";
  const isIntellectual = location.pathname === "/intellectual";
  const isLimit = location.pathname === "/limit";
  const isGovern = location.pathname === "/govern";
  const isOurStory = location.pathname === "/ourstory";
  const isOurTeam = location.pathname === "/ourteam";
  const isChooseUs = location.pathname === "/choose";

  return (
    <>
      {!isContactInfo &&
        !isTerms &&
        !isUseOfWebsite &&
        !isVehiclePrice &&
        !isIntellectual &&
        !isLimit &&
        !isGovern &&
        !isOurStory &&
        !isOurTeam &&
        !isChooseUs && (
          <div className="bg-blue-950 ">
            <div className="bg-blue-950 text-white mx-auto w-[90%]">
              <div className="flex gap-2 pt-5">
                <div>
                  <img
                    src="/images/bluelogo.jpeg"
                    className="h-16 md:h-20 md:w-[12%] rounded-lg"
                    alt="Car logo"
                  />
                </div>
                <div className="space-y-1 font-semibold">
                  <p>YourNextCar</p>
                  <p className="leading-7 font-semibold">
                    Offering Quality Cars, Affordable prices and Nationwide
                    Delivery.
                  </p>
                </div>
              </div>
              <div className="text-center pt-10">
                <div className="mb-5 space-y-1">
                  <h2 className="mb-1 text-indigo-50 font-semibold">
                    Quick Links
                  </h2>
                  <p className="text-sm">
                    <Link to="/">Home</Link>
                  </p>
                  <p className="text-sm">
                    <Link to="/newcars">New Cars</Link>
                  </p>
                  <p className="text-sm">
                    <Link to="/usedcars">Used Cars</Link>
                  </p>
                  <p className="text-sm">
                    <Link to="/products">Product Page</Link>
                  </p>
                  <p className="text-sm">
                    <Link to="/terms">Terms & Conditions</Link>
                  </p>
                </div>
                <div className="mb-5 space-y-1">
                  <h2 className="mb-1 text-indigo-50 font-semibold">
                    Social Links
                  </h2>
                  <p className="text-sm">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </p>
                  <p className="text-sm">
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </p>
                  <p className="text-sm">
                    <a
                      href="https://web.whatsapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </p>
                  <p className="text-sm">
                    {" "}
                    <a
                      href="https://web.telegram.org/k/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Telegram
                    </a>
                  </p>
                  <p className="text-sm">
                    <Link to="/contact">Contact Info</Link>
                  </p>
                </div>
                <div className="mb-8 space-y-1">
                  <h2 className="mb-1 text-indigo-50 font-semibold">
                    About Us
                  </h2>
                  <p className="text-sm">
                    {" "}
                    <Link to="/ourstory">Our Story</Link>
                  </p>
                  <p className="text-sm">
                    <Link to="/ourteam">Our Team</Link>
                  </p>
                  <p className="text-sm">
                    <Link to="/choose">Why Choose Us</Link>
                  </p>
                  <p className="text-sm">Customer Reviews</p>
                  <p className="text-sm">Delivery & Logistics</p>
                </div>
              </div>
              <div className="text-center pb-8">
                <p className="text-sm">
                  Copyright 2025 YourNextCar. All Rights Reserved.
                </p>
                <p className="text-md">Powered By XaviMoney Nig. Ltd.</p>
              </div>
            </div>
          </div>
        )}
    </>
  );
}

export default Footer;
