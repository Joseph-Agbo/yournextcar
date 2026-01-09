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
  const isReviews = location.pathname === "/reviews";
  const isDelivery = location.pathname === "/delivery";
  const isProfilePage = location.pathname === "/profile";
  const isLoginForm = location.pathname === "/loginform";
  const isSignupForm = location.pathname === "/signupform";
  const isProductDetails = location.pathname.startsWith("/productdetail");
  const isMobileForm = location.pathname === "/mobileform";
  const isCheckoutForm = location.pathname.startsWith("/checkout");

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
        !isChooseUs &&
        !isReviews &&
        !isDelivery &&
        !isProfilePage &&
        !isLoginForm &&
        !isSignupForm &&
        !isProductDetails &&
        !isMobileForm &&
        !isCheckoutForm && (
          <div className="bg-blue-950 ">
            <div className="bg-blue-950 text-white mx-auto w-[90%] md:w-[97%] md:flex md:flex-col [@media(min-width:768px)_and_(max-width:950px)]:w-[96%]">
              <div className="flex gap-2 pt-5 md:mb-5 md:pt-7">
                <div>
                  <img
                    src="/images/bluelogo.jpeg"
                    className="h-16 w-full md:h-20 rounded-lg"
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
              <div className="text-center pt-10 md:flex md:justify-around md:mb-5">
                <div className="mb-5 space-y-1">
                  <h2 className="mb-1 text-indigo-50 font-semibold md:text-lg md:mb-2">
                    Quick Links
                  </h2>
                  <p className="text-sm md:hover:text-teal-300">
                    <Link to="/">Home</Link>
                  </p>
                  <p className="text-sm md:hover:text-teal-300">
                    <Link to="/newcars">New Cars</Link>
                  </p>
                  <p className="text-sm md:hover:text-teal-300">
                    <Link to="/usedcars">Used Cars</Link>
                  </p>
                  <p className="text-sm md:hover:text-teal-300">
                    <Link to="/products">Product Page</Link>
                  </p>
                  <p className="text-sm md:hover:text-teal-300">
                    <Link to="/terms">Terms & Conditions</Link>
                  </p>
                </div>
                <div className="mb-5 space-y-1">
                  <h2 className="mb-1 text-indigo-50 font-semibold md:text-lg md:mb-2">
                    Social Links
                  </h2>
                  <p className="text-sm md:hover:text-teal-300">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </p>
                  <p className="text-sm md:hover:text-teal-300">
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </p>
                  <p className="text-sm md:hover:text-teal-300">
                    <a
                      href="https://web.whatsapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </p>
                  <p className="text-sm md:hover:text-teal-300">
                    {" "}
                    <a
                      href="https://web.telegram.org/k/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Telegram
                    </a>
                  </p>
                  <p className="text-sm md:hover:text-teal-300">
                    <Link to="/contact">Contact Info</Link>
                  </p>
                </div>
                <div className="mb-8 space-y-1">
                  <h2 className="mb-1 text-indigo-50 font-semibold md:text-lg md:mb-2">
                    About Us
                  </h2>
                  <p className="text-sm md:hover:text-teal-300">
                    {" "}
                    <Link to="/ourstory">Our Story</Link>
                  </p>
                  <p className="text-sm md:hover:text-teal-300">
                    <Link to="/ourteam">Our Team</Link>
                  </p>
                  <p className="text-sm md:hover:text-teal-300">
                    <Link to="/choose">Why Choose Us</Link>
                  </p>
                  <p className="text-sm md:hover:text-teal-300"><Link to="/reviews">Customer Reviews</Link></p>
                  <p className="text-sm md:hover:text-teal-300"><Link to="/delivery">Delivery & Logistics</Link></p>
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
