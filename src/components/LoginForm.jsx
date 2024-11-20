import React, { useState, useEffect } from "react";
import google from "./images/google.png";
import facebook from "./images/facebook.png";
import image from "./images/image.jpg";

const LoginForm = () => {
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@(gmail\.com|yahoo\.com)$/i; // اصلاح شده
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(password);
  };

  useEffect(() => {
    if (gmail && !validateEmail(gmail)) {
      setErrorMessage("Invalid email. Only Gmail and Yahoo are allowed.");
    } else if (password && !validatePassword(password)) {
      setErrorMessage(
        "Password must be at least 8 characters long and contain at least one letter."
      );
    } else {
      setErrorMessage("");
    }
  }, [gmail, password]);

  const handleSubmit = () => {
    if (!gmail || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    if (!validateEmail(gmail)) {
      setErrorMessage("Invalid email. Only Gmail and Yahoo are allowed.");
      return;
    }
    if (!validatePassword(password)) {
      setErrorMessage(
        "Password must be at least 8 characters long and contain at least one letter."
      );
      return;
    }
    setErrorMessage("");
    alert("Validation successful!");
  };

  return (
    <div>
      <>
        <div className="flex justify-center items-center p-4 bg-rose-50 min-h-screen">
          <div className="relative flex flex-col md:flex-row md:space-x-4 md:max-w-[910px] bg-white shadow-2xl p-6 md:p-0 rounded-xl">
            <div className="flex-1 md:p-12">
              <div>
                <h1 className="capitalize font-mono text-4xl font-bold mb-5">
                  log in
                </h1>
                <p className="text-gray-600 font-light font-sans max-w-sm">
                  Log in to your account to upload or download pictures, videos
                  or music.
                </p>
              </div>
              <div className="relative border-b-gray-200 border-b-[1px] py-12 ">
                <input
                  value={gmail}
                  onChange={(e) => setGmail(e.target.value)}
                  type="text"
                  placeholder="Enter your email address"
                  className="placeholder:font-light p-6 mb-6 border-[1px] border-gray-300 w-full rounded-md focus:outline-orange-300"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter your password"
                  className="placeholder:font-light p-6 mb-6 border-[1px] border-gray-300 w-full rounded-md focus:outline-orange-300"
                />
                {errorMessage && (
                  <p className="text-red-500 text-sm mb-4 text-wrap">
                    {errorMessage}
                  </p>
                )}
                <div className="text-center flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-3 md:justify-between">
                  <span className="group w-full">
                    <button
                      onClick={handleSubmit}
                      className="flex w-full justify-center items-center rounded-lg space-x-4 shadow-cyan-100 shadow-lg bg-cyan-700 px-9 py-3 text-white font-bold md:w-auto group-hover:opacity-85 group-hover:-translate-y-1 transition-all group-hover:shadow-xl"
                    >
                      <span>Next</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffffff"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <line x1="13" y1="18" x2="19" y2="12"></line>
                        <line x1="13" y1="6" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
              <div className="text-center">
                <a
                  href="#"
                  className="text-gray-400 font-thin text-sm py-6 block"
                >
                  or log in with
                </a>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-3">
                  <div className="group w-full">
                    <button className="flex justify-center items-center space-x-3 w-full border-gray-300 border-[1px] rounded-md py-2 group-hover:-translate-y-2 group-hover:shadow-xl transition-all">
                      <img className="w-9 h-9" src={facebook} alt="" />
                      <span>Facebook</span>
                    </button>
                  </div>
                  <div className="group w-full">
                    <button className="flex justify-center items-center space-x-3 w-full border-gray-300 border-[1px] rounded-md py-2 group-hover:-translate-y-2 group-hover:shadow-xl transition-all">
                      <img className="w-9 h-9" src={google} alt="" />
                      <span>Google</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-rose-50">
              <img
                src={image}
                alt=""
                className="hidden md:block h-full object-cover"
              />
              <div className="group absolute right-5 top-5 flex justify-center items-center rounded-full h-10 w-10 bg-gray-200 hover:-translate-y-[2px] transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 text-black group-hover:text-red-600"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default LoginForm;
