import React from "react";
import { BsStar } from "react-icons/bs";
const TeamCard = ({ team }) => {
  return (
    <div className="relative wrapper flex flex-col justify-center rounded-2xl bg-gray-200  text-gray-900 h-[360px] px-3 ">
      <button>
        <BsStar className="relative  left-[90%] -top-7 " />
      </button>
      <div>
        <img
          src={team.team.logo}
          alt={team.team.name}
          className="rounded-2xl h-[153px] w-[320px] "
        />

        <div className="bg-white  m-auto rounded-lg shadow-2xl relative p-2 w-72 top-8">
          <div className="flex justify-center items-baseline">
            <span className="bg-teal-200 text-teal-800 text-sm px-2 inline-block  rounded-full  uppercase font-semibold tracking-wide">
              Rank: {team.position}
            </span>
          </div>

          <div className="mt-1">
            <span className="text-gray-600 text-lg font-medium">
              {" "}
              {team.team.name}
            </span>
          </div>
          <div className="mt-2">
            <span className="text-teal-600 text-md font-semibold">
              {team.points}{" "}
            </span>
            <span className="text-sm text-gray-600">Points</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
