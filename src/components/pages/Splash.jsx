import React, { useContext } from "react";
import { Link } from "react-router-dom";
import vidlink from "../media/cropped.mp4";
import { AuthContext } from "../Auth";
import gif from "../media/gif.gif";
const Splash = () => {
  const { state } = useContext(AuthContext);

  return (
    <header class="relative flex items-center justify-center h-screen mt-14 mb-14  overflow-x-hidden overflow-y-auto">
      <div class="relative z-30 p-5 text-2xl text-white bg-gray-500  w-full bg-opacity-30  ">
        <h1 className=" font-bold text-5xl text-center uppercase w-full  sm:text-8xl">
          It's lights out and away we go
          <p className="text-3xl font-bold m-4 pb-5 sm:text-5xl">
            What are you waiting for?
          </p>
        </h1>
        {!state.user ? (
          <div className="flex gap-2 justify-center">
            <Link to="/signup">
              <button
                type="button"
                class="relative px-5 w-40 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border  rounded-lg shadow-inner group"
              >
                <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  Sign Up
                </span>
              </button>
            </Link>
            <Link to="/login">
              <button
                type="button"
                class="relative px-5 w-40 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border  rounded-lg shadow-inner group"
              >
                <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  Login
                </span>
              </button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      <video
        className="absolute object-contain z-10 w-auto min-w-full min-h-full max-w-none "
        src={vidlink}
        autoPlay
        loop
        muted
      />
      {/* <img
        src={gif}
        alt="gif"
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none "
      /> */}
    </header>
  );
};

export default Splash;
