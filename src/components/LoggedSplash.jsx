import React from "react";
import NextRace from "./NextRace";

const LoggedSplash = () => {
  return (
    <>
      <div className="flex flex-wrap mt-16 border-2 h-[850px] ">
        <div className=" border-2 h-3/5 w-1/3">
          <NextRace />
        </div>
        <div className="border-2 h-3/5 w-1/3"></div>
        <div className="border-2 h-3/5 w-1/3"></div>
        <div className="border-2 h-2/5 w-1/3"></div>
        <div className="border-2 h-2/5 w-1/3"></div>
        <div className="border-2 h-2/5 w-1/3"></div>
      </div>
    </>
  );
};

export default LoggedSplash;
