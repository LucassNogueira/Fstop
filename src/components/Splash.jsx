import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import vidlink from "./media/cropped.mp4";
const Splash = () => {
  //   const button = () => {
  //     axios
  //       .get("https://v1.formula-1.api-sports.io/teams", {
  //         headers: {
  //           "x-rapidapi-key": process.env.REACT_APP_APP_API_KEY,
  //           "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
  //         },
  //       })
  //       .then((res) => console.log(res.data))
  //       .catch((error) => console.log(error));
  //   };
  return (
    <div className="relative ">
      {/* <button onClick={() => button()}>Click</button> */}
      <div className="fixed top-0 z-[-1] w-full h-screen">
        <video src={vidlink} autoPlay loop muted />
        <div className="absolute text-center justify-center w-full top-1/3 ">
          <h1 className=" font-bold text-9xl w-full bg-white bg-opacity-60 ">
            PETROL IS IN THE AIR
            <p className="text-6xl font-bold m-4 pb-5 ">
              What are you waiting for?
            </p>
          </h1>

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
        </div>
      </div>
    </div>
  );
};

export default Splash;
