import React, { useContext } from "react";
import { Link } from "react-router-dom";
import vidlink from "../media/cropped.mp4";
import { AuthContext } from "../Auth";
const Splash = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <div>
        <video className="mt-14" src={vidlink} autoPlay loop muted />
        <div className="absolute text-center justify-center w-full top-1/3 ">
          <h1 className=" font-bold text-8xl uppercase w-full bg-white bg-opacity-60 sm-40">
            It's lights out and away we go
            <p className="text-6xl font-bold m-4 pb-5 ">
              What are you waiting for?
            </p>
          </h1>
          {!currentUser ? (
            <div className="flex gap-2 justify-center">
              <Link to="/signup">
                <button className=" px-2.5 py-1.5 border border-gray-300 w-60 text-xl font-medium rounded text-gray-700 bg-white hover:bg-gray-50 ">
                  Sign Up
                </button>
              </Link>
              <Link to="/login">
                <button className="px-2.5 py-1.5 border border-gray-300 w-60 text-xl font-medium rounded text-gray-700 bg-white hover:bg-gray-50 ">
                  Login
                </button>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="absolute text-center justify-center w-full top-1/3 "></div>
    </div>
  );
};

export default Splash;
