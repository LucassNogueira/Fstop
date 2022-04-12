import React, { useState } from "react";
import { BsHeartFill } from "react-icons/bs";
const CircuitCard = ({ circuit, faveCircuit, handleClick, userDoc }) => {
  // console.log(userDoc.favTrack);
  // console.log(circuit);
  return (
    <div className="wrapper relative justify-center rounded-2xl bg-gray-200 text-gray-900 h-[351px] w-[328px]">
      <BsHeartFill
        fill={userDoc?.favTrack?.id === circuit?.id ? "red" : null}
        size="25"
        className="relative  left-[85%] top-4 cursor-pointer"
        onClick={() => handleClick(circuit)}
      />
      <div className="justify-center">
        <img
          src={circuit.circuit.image}
          alt={circuit.competition.name}
          className="m-auto h-[150px] w-[266px] select-none"
        />
        {circuit.circuit.id}
        <div className="relative px-2 -mt-16  ">
          <div className="bg-white p-3 mt-24 mb-3 rounded-lg shadow-2xl static ">
            <div className="flex justify-center items-baseline">
              <span className="bg-teal-200 text-teal-800 text-xs px-3 inline-block  rounded-full  uppercase font-semibold tracking-wide select-none">
                Laps: {circuit.laps.total}
              </span>
            </div>

            <h4 className="mt-1 text-lg font-semibold uppercase leading-tight truncate">
              {circuit.competition.name}
            </h4>

            <div className="mt-1">
              <span className="text-gray-600 text-sm">
                {" "}
                City: {circuit.competition.location.city}
              </span>
            </div>
            <div className="mt-1">
              <span className="text-teal-600 text-md font-semibold">
                {circuit.distance}{" "}
              </span>
              <span className="text-sm text-gray-600">Long</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircuitCard;
