import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobileForm = location.pathname === "/mobileform";
  const isLoginForm = location.pathname === "/loginform";
  const isSignupForm = location.pathname === "/signupform";
  const isCheckoutForm = location.pathname.startsWith("/checkout");
  const isProfilePage = location.pathname === "/profile";
  const isEditProfile = location.pathname === "/editprofile";
  const isContactInfo = location.pathname === "/contact"
  const isTerms = location.pathname === "/terms"
  const isUseOfWebsite = location.pathname === "/useofwebsite"
  const isVehiclePrice = location.pathname === "/vehicleprice"
  const isIntellectual = location.pathname === "/intellectual"
  const isLimit = location.pathname === "/limit"
  const isGovern = location.pathname === "/govern"
  const isOurStory = location.pathname === "/ourstory"
  const isOurTeam = location.pathname === "/ourteam"
  const isChooseUs = location.pathname === "/choose"
  const isReviews = location.pathname === "/reviews"
  const isDelivery = location.pathname === "/delivery"

  const deskOptions = !isProfilePage && !isEditProfile && !isContactInfo && !isTerms && (
    <div className="flex justify-around items-center w-full text-teal-950">
      <Link
        to="/"
        className="px-8 pb-2 inline-block border-b-8 border-transparent mt-5 md:hover:border-blue-950 transition-all duration-200"
      >
        Home
      </Link>
      <Link
        to="/newcars"
        className="px-4 pb-2 inline-block border-b-8 border-transparent mt-5 md:hover:border-blue-950 transition-all duration-200"
      >
        <span className="hidden [@media(min-width:768px)_and_(max-width:950px)]:inline">New</span>
        <span className="inline [@media(min-width:768px)_and_(max-width:950px)]:hidden">New Cars</span>
      </Link>
      <Link
        to="/usedcars"
        className="px-4 inline-block pb-2 border-b-8 border-transparent mt-5 md:hover:border-blue-950 transition-all duration-200"
      >
        <span className="hidden [@media(min-width:768px)_and_(max-width:950px)]:inline">Used</span>
        <span className="inline [@media(min-width:768px)_and_(max-width:950px)]:hidden">Used Cars</span>
      </Link>
      <Link
        to="/loginform"
        className="px-4 [@media(min-width:768px)_and_(max-width:950px)]:hidden inline-block pb-2 border-b-8 border-transparent mt-5 md:hover:border-blue-950 transition-all duration-200"
      >
        Login
      </Link>
      <Link
        to="/signupform"
        className="px-4 border-b-8 border-transparent mt-5 pb-2 inline-block md:hover:border-blue-950 transition-all duration-200"
      >
        Sign Up
      </Link>
    </div>
  );

  return (
    <div
      className={`${
        isMobileForm ||
        isCheckoutForm ||
        isProfilePage ||
        isEditProfile ||
        isContactInfo ||
        isTerms ||
        isUseOfWebsite ||
        isVehiclePrice ||
        isIntellectual ||
        isLimit ||
        isGovern ||
        isOurStory ||
        isOurTeam ||
        isChooseUs ||
        isReviews ||
        isDelivery
          ? ""
          : "border-gray-300 shadow-lg shadow-gray-400/65"
      } ${isProfilePage || isEditProfile || isContactInfo || isTerms || isUseOfWebsite || isVehiclePrice || isIntellectual || isLimit || isGovern || isOurStory || isOurTeam || isChooseUs || isReviews || isDelivery ? "" : "md:h-24"} fixed top-0 z-30 w-full bg-white`}
    >
      <div className="flex justify-between items-center">
        <div
          className={`${
            isLoginForm || isSignupForm
              ? "flex items-center justify-start"
              : "flex items-center justify-start"
          }`}
        >
          {!isProfilePage && !isEditProfile && !isContactInfo && !isTerms && !isUseOfWebsite && !isVehiclePrice && !isIntellectual && !isLimit && !isGovern && !isOurStory && !isOurTeam && !isChooseUs && !isReviews && !isDelivery && (
            <img src="/images/carlogo.jpeg" alt="Carlogo" className="h-24" />
          )}
          {isProfilePage && (
            <img
              src="/images/carlogo.jpeg"
              alt="Carlogo"
              className="h-24 max-[430px]:block hidden"
            />
          )}
          {!isProfilePage && !isEditProfile && !isContactInfo && !isTerms && !isUseOfWebsite && !isVehiclePrice && !isIntellectual && !isLimit && !isGovern && !isOurStory && !isOurTeam && !isChooseUs && !isReviews && !isDelivery && (
            <h1 className="text-[1rem] md:text-xl text-blue-950 font-bold">
              YourNextCar
            </h1>
          )}
        </div>
        {!isCheckoutForm && !isUseOfWebsite && !isVehiclePrice && !isIntellectual && !isLimit && !isGovern && !isOurStory && !isOurTeam && !isChooseUs && !isReviews && !isDelivery && (
          <div className="hidden md:flex w-[50%]">{deskOptions}</div>
        )}
        {!isEditProfile && !isContactInfo &&!isTerms && !isUseOfWebsite && !isVehiclePrice && !isIntellectual && !isLimit && !isGovern && !isOurStory && !isOurTeam && !isChooseUs && !isReviews && !isDelivery && (
          <button
            type="button"
            className="text-3xl text-blue-950 md:hidden p-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AiOutlineMenuFold />
          </button>
        )}
      </div>
      {!isEditProfile && !isContactInfo && !isTerms && !isUseOfWebsite && !isVehiclePrice && !isIntellectual && !isLimit && !isGovern && !isOurStory && !isOurTeam && !isChooseUs && !isReviews && !isDelivery && (
        <div
          className={`flex flex-col items-center gap-1 text-sm overflow-hidden transition-all duration-300 ${
            isMenuOpen
              ? "h-32 py-1 opacity-100 bg-linear-to-r from-gray-50 to-indigo-50"
              : "h-0 opacity-0"
          } md:hidden`}
        >
          <Link
            to="/"
            className="text-indigo-800 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/newcars"
            className="text-indigo-800 transition-colors duration-200"
          >
            New Cars
          </Link>
          <Link
            to="/usedcars"
            className="text-indigo-800 transition-colors duration-200"
          >
            Used Cars
          </Link>
          <Link
            to="/carprice"
            className="text-indigo-800 transition-colors duration-200"
          >
            Cars by Price
          </Link>
          <Link
            to="/mobileform"
            className="text-indigo-800 transition-colors duration-200"
          >
            Login/Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
