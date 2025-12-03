import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

function MobileForm() {
  const [showPassword, setShowPassWord] = useState(false);
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;

  const retrieveEmail = (e) => {
    setEmail(e.target.value);
  };
  const retrievePassWord = (e) => {
    setPassWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("You have not entered an email");
      valid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Incorrect email format");
      valid = false;
    }

    if (!passWord) {
      setPasswordError("password is required");
      valid = false;
    } else if (passWord.length < 8) {
      setPasswordError("Enter at least 8 characters");
      valid = false;
    } else if (!passwordRegex.test(passWord)) {
      setPasswordError("Use alphabets, symbols and numbers");
      valid = false;
    }

    if (!valid) return;

    alert("Login successfull!");

    setEmail("");
    setPassWord("");
  };

  return (
    <div className="flex flex-col gap-y-4 items-center pt-7 px-4">
      <h2 className="text-xl font-semibold">Log in or sign up</h2>
      <hr className="w-full leading-1.0" />
      <div className="mx-auto">
        <h1 className="py-4 px-2 text-lg">Welcome to YNC</h1>
        <form onSubmit={handleSubmit} className="mb-5 flex flex-col gap-4 items-center">
          <input
            type="email"
            value={email}
            onChange={retrieveEmail}
            placeholder="Enter your e-mail"
            className="w-[95%] p-3 border rounded-md bg-white text-blue-950 text-md outline-blue-950"
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          <div className="relative w-[95%]">
            <input
              type={showPassword ? "text" : "password"}
              value={passWord}
              onChange={retrievePassWord}
              placeholder="Enter your password"
              className="w-full p-3 border rounded-md bg-white text-blue-950 text-md outline-blue-950"
            />
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
            <button
              type="button"
              onClick={() => setShowPassWord(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-blue-900"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-[95%] border rounded-md text-white bg-blue-950 text-lg p-3"
          >
            Continue
          </button>
          <p className="text-blue-950 text-md">
            Don't have an account with us?{" "}
            <Link to="/signupform" className="underline">
              Sign up
            </Link>{" "}
          </p>
        </form>
        <div className="flex justify-center items-center gap-3 mt-0.5">
          <hr className="w-[40%]" /> or <hr className="w-[40%]" />
        </div>
        <div className="flex flex-col mt-5 gap-4 max-[378px]:mx-auto">
          <button
            className="w-full flex items-center justify-evenly border rounded-md bg-white text-blue-950 text-lg p-3"
            type="button"
          >
            <FcGoogle /> Continue with Google
          </button>
          <button
            className="w-full flex items-center justify-evenly border rounded-md bg-white text-blue-950 text-lg p-3"
            type="button"
          >
            <BsFacebook /> Continue with Facebook
          </button>
          <button
            className="w-full flex items-center justify-evenly border rounded-md bg-white text-blue-950 text-lg p-3"
            type="button"
          >
            <MdEmail /> Continue with Email
          </button>
        </div>
        <p className="p-2 text-center">
          By creating an account, you automatically accept <br /> our Terms of
          service, Privacy Policy and Cookies <br /> Policy
        </p>
      </div>
    </div>
  );
}

export default MobileForm;
