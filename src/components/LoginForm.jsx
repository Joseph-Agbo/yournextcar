import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function LoginForm() {
  const [showPassword, setShowPassWord] = useState(false);
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;

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
      setPasswordError("Password is required");
      valid = false;
    } else if (passWord.length < 8) {
      setPasswordError("Enter at least 8 characters");
      valid = false;
    } else if (!passwordRegex.test(passWord)) {
      setPasswordError("Use alphabets, symbols and numbers");
      valid = false;
    }

    if (!valid) return;

    alert("Login Successful!");
    setEmail("");
    setPassWord("");
  };

  return (
    <div className="py-8 px-4 pt-8 md:pt-10">
      {/* Cancel Button (Mobile friendly) */}
      <Link
        to="/"
        title="Home"
        className="absolute top-26 right-4 md:top-25 md:right-85 [@media(min-width:768px)_and_(max-width:950px)]:right-40"
      >
        <ImCancelCircle className="size-8 text-gray-500 hover:text-gray-700 transition" />
      </Link>

      <h1 className="py-8 text-2xl font-semibold text-center text-blue-950">
        Welcome to YNC
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mb-5 flex flex-col gap-5 items-center w-full"
      >
        {/* EMAIL */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your e-mail"
          className="w-full max-w-md p-4 border rounded-md bg-white text-blue-950 text-lg outline-blue-950"
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

        {/* PASSWORD */}
        <div className="relative w-full max-w-md">
          <input
            type={showPassword ? "text" : "password"}
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
            placeholder="Enter your password"
            className="w-full p-4 border rounded-md bg-white text-blue-950 text-lg outline-blue-950"
          />

          <button
            type="button"
            onClick={() => setShowPassWord(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl text-blue-900"
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>
        {passwordError && (
          <p className="text-red-500 text-sm">{passwordError}</p>
        )}

        {/* LOGIN BUTTON */}
        <button
          type="submit"
          className="w-full max-w-md cursor-pointer border rounded-md text-white bg-blue-950 text-xl p-4 md:hover:bg-blue-900 transition"
        >
          Log in
        </button>

        <p className="text-blue-950 text-md text-center">
          Don't have an account with us?{" "}
          <Link to="/signupform" className="underline cursor-pointer">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
