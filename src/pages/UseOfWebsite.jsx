import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function UseOfWebsite() {
  const navigate = useNavigate();
  
  
  return (
    <div className="bg-blue-950 text-white [@media(min-width:768px)_and_(max-width:950px)]:-mt-23">
      <div className="mx-auto w-[90%] pt-6 pb-10">
        <div className="flex justify-center items-center relative mb-7">
          <IoArrowBack onClick={() => navigate(-1)} className="absolute left-0 size-5 md:size-7 md:cursor-pointer" />
          <p className="font-semibold text-lg md:text-xl">Use of Website Policy</p>
        </div>
        <div className="mb-5">
          <h2 className="font-bold text-lg mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using this website (“YourNextCar”), you agree to
            comply with and be bound by these Terms and Conditions. If you do
            not agree with any part of these terms, you must stop using the Site
            immediately.
          </p>
        </div>
        <div className="mb-5">
          <h2 className="font-bold text-lg mb-3">2. Eligibility</h2>
          <p>
            This website is intended for users who are at least 18 years old. By
            using the Site, you confirm that you meet this age requirement.
          </p>
        </div>
        <div className="mb-5">
          <h2 className="font-bold text-lg mb-3">3. Permitted Use</h2>
          <p className="mb-3">
            You agree to use this website only for lawful purposes, including:
          </p>
          <ol className="list-disc list-inside space-y-2 mb-3">
            <li>Browsing vehicle listings</li>
            <li>Requesting information</li>
            <li>Contacting our sales team</li>
            <li>Submitting inquiries or forms</li>
            <li>Creating and managing your account</li>
          </ol>
          <p className="mb-3">You may not use this Site to:</p>
          <ol className="list-disc list-inside space-y-2">
            <li>Upload or transmit harmful code (viruses, malware, etc.)</li>
            <li>Attempt unauthorized access to servers or databases</li>
            <li>Interfere with website functionality</li>
            <li>Harvest data or engage in fraudulent activity</li>
            <li>Misrepresent your identity or provide false information</li>
          </ol>
        </div>
        <div className="mb-5">
          <h2 className="font-bold text-lg mb-3">4. User Accounts</h2>
          <p className="mb-3">If you create an account on this website:</p>
          <ol className="list-disc list-inside space-y-2 mb-3">
            <li>You are responsible for maintaining the confidentiality of your login details.</li>
            <li>All activity under your account is your responsibility.</li>
            <li>You must notify us immediately if you suspect unauthorized access.</li>
          </ol>
          <p>We reserve the right to suspend or terminate accounts found in violation of these terms.</p>
        </div>
        <div className="mb-5">
          <h2 className="font-bold text-lg mb-3">5. Accuracy of Information</h2>
          <p className="mb-2">We aim to provide accurate and updated information about vehicles, prices, and promotions.</p>
          <p className="mb-3">However:</p>
          <ol className="list-disc list-inside space-y-2 mb-3">
            <li>Vehicle availability, specifications, and pricing may change without notice.</li>
            <li>Information on this site may contain unintentional errors or inaccuracies.</li>
          </ol>
          <p>We are not liable for any decisions made based solely on the information displayed on the Site.</p>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-3">6. Third-Party Links</h2>
          <p className="mb-2">This website may contain links to third-party websites such as WhatsApp, Facebook, Instagram, or Telegram.</p>
          <p className="mb-3">We are not responsible for:</p>
          <ol className="list-disc list-inside mb-3">
            <li>The content on external websites</li>
            <li>Their privacy practices</li>
            <li>Transactions or interactions that occur outside our Site</li>
          </ol>
          <p>Users visit third-party links at their own risk.</p>
        </div>
      </div>
    </div>
  );
}

export default UseOfWebsite;
