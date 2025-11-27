import React from "react";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

function LoginForm() {
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
    <div className="py-8">
      <h1 className="py-8 px-2 text-lg font-semibold text-center">
        Welcome to YNC
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mb-5 flex flex-col gap-5 items-center"
      >
        <input
          type="email"
          value={email}
          onChange={retrieveEmail}
          placeholder="Enter your e-mail"
          className="w-[40%] p-3 border rounded-md bg-white text-blue-950 text-md outline-blue-950"
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        <div className="relative w-[40%]">
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
          className="w-[40%] cursor-pointer border rounded-md text-white bg-blue-950 text-lg p-3"
        >
          Log in
        </button>
        <p className="text-blue-950 text-md">
          Don't have an account with us?{" "}
          <Link to="/signupform" className="underline cursor-pointer">
            Sign up
          </Link>{" "}
        </p>
        <Link to="/" className="relative z-10 left-58 bottom-95" type="button">
          <ImCancelCircle className="size-8 bg-gray-50 text-gray-500" />
        </Link>
      </form>
    </div>
  );
}

export default LoginForm;
