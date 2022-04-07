import React from "react";
import DriverStandings from "./DriverStandings";
import NextRace from "./NextRace";

const LoggedSplash = () => {
  return (
    <>
      <div className="flex flex-wrap mt-16 h-[850px] ">
        {/* <div className="  h-full w-1/3"> */}
        <DriverStandings />
        {/* </div>
        <div className="border-2 h-full w-1/3">
          <div className="border-b-2 h-1/2 w-full">
            <NextRace />
          </div>
        </div>
        <div className="border-2 h-full w-1/3"></div> */}
      </div>
    </>
  );
};

export default LoggedSplash;
