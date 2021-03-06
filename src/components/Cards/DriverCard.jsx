import React, { useContext } from "react";
import { BsHeartFill } from "react-icons/bs";
import { AuthContext } from "../Auth";
import { MdCompare } from "react-icons/md";
const DriverCard = ({ driver, handleClick, handleCompare, handleCompare2 }) => {
  const { userDoc } = useContext(AuthContext);

  return (
    <div className="wrapper relative justify-center rounded-2xl bg-gray-200 text-gray-900 h-[390px] w-[231px]">
      <BsHeartFill
        size="25"
        className="relative  left-[85%] top-4 cursor-pointer"
        onClick={() => handleClick(driver)}
        fill={userDoc?.favDriver?.id === driver.driver.id ? "red" : null}
      />
      <div className="justify-center">
        <img
          src={driver.driver.image}
          alt={driver.driver.name}
          className="m-auto min-h-[206px] min-w-[206px] select-none"
        />

        <div className="relative px-2 -mt-16  ">
          <div className="bg-white p-3 mt-12 mb-3 rounded-lg shadow-2xl static ">
            <div className="flex justify-center items-baseline">
              <span className="bg-teal-200 text-teal-800 text-xs px-3 inline-block  rounded-full  uppercase font-semibold tracking-wide select-none">
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
                {!driver.points ? "0" : driver.points}{" "}
              </span>
              <span className="text-sm text-gray-600">Points</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => handleCompare(driver)}
                className="px-6 py-2 text-sm rounded shadow bg-slate-200 hover:bg-slate-400 text-slate-500 hover:text-black"
              >
                {<MdCompare />}
              </button>
              <button
                onClick={() => handleCompare2(driver)}
                className="px-6 py-2 text-sm rounded shadow bg-slate-200 hover:bg-slate-400 text-slate-500 hover:text-black"
              >
                {<MdCompare className="rotate-180	" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
