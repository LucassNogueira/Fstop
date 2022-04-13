import React from "react";
import img from "../media/puncture.jpg";
const NotFoundPage = () => {
  return (
    <div className="mt-16 border-2  relative">
      <img alt="puncture" src={img} className="w-full  h-[950px] -mt-[81px] " />
      <h1 className="absolute font-extrabold text-7xl top-80 left-40">
        Looks like you've reached the 404!
      </h1>
    </div>
  );
};

export default NotFoundPage;
