import React from "react";
import { BsStar } from "react-icons/bs";
const DriverCard = ({ driver }) => {
  if (driver.points === null) {
    return (driver.points = 0);
  }
  return (
    <div className="wrapper relative justify-center rounded-2xl bg-gray-200 text-gray-900 h-[351px] w-[228px]">
      <button>
        <BsStar className=" relative left-[90px] top-3" />
      </button>
      <div className="justify-center">
        <img
          src={driver.driver.image}
          alt={driver.driver.name}
          className="m-auto min-h-[206px] min-w-[206px]"
        />

        <div className="relative px-2 -mt-16  ">
          <div className="bg-white p-3 mt-12 mb-3 rounded-lg shadow-2xl static ">
            <div className="flex justify-center items-baseline">
              <span className="bg-teal-200 text-teal-800 text-xs px-3 inline-block  rounded-full  uppercase font-semibold tracking-wide">
                Rank: {driver.position}
              </span>
            </div>

            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
              {driver.driver.name}
            </h4>

            <div className="mt-1">
              <span className="text-gray-600 text-sm"> {driver.team.name}</span>
            </div>
            <div className="mt-1">
              <span className="text-teal-600 text-md font-semibold">
                {driver.points}{" "}
              </span>
              <span className="text-sm text-gray-600">Points</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
