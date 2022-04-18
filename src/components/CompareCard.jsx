import React from "react";

const CompareCard = ({ compare1, compare2, handleClear }) => {
  //   console.log(compare1);
  const MILLISECONDS_IN_A_YEAR = 1000 * 60 * 60 * 24 * 365;
  function getAge(time) {
    let date_array = time.split("-");
    let years_elapsed =
      (new Date() - new Date(date_array[0], date_array[1], date_array[2])) /
      MILLISECONDS_IN_A_YEAR;
    return years_elapsed;
  }

  return (
    <div className="justify-center  mb-10 md:flex sm:flex">
      <div className="wrapper relative justify-center rounded-2xl bg-gray-200 text-gray-900 h-[270px] w-[231px]">
        <div className="justify-center">
          <img
            src={compare1.image}
            alt={compare1.name}
            className="m-auto min-h-[206px] min-w-[206px] select-none"
          />

          <div className="relative px-2 -mt-16  ">
            <div className="bg-white p-3 mt-12 mb-3 rounded-lg shadow-2xl static ">
              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                {compare1.name}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:w-2/5 sm:w-2/5 h-[290px] sm:flex md:flex relative justify-center">
        <h1 className="text-2xl font-semibold mb-2">
          {compare1.name}{" "}
          <span className="text-red-600 text-2xl font-extrabold">VS</span>{" "}
          {compare2.name}
        </h1>
        <h1 className="text-2xl font-semibold">
          {compare1.career_points}{" "}
          <span className="text-red-600 text-2xl font-extrabold">
            Career Points
          </span>{" "}
          {compare2.career_points}
        </h1>
        <h1 className="text-2xl font-semibold">
          {compare1.podiums}{" "}
          <span className="text-red-600 text-2xl font-extrabold">Podiums</span>{" "}
          {compare2.podiums}
        </h1>
        <h1 className="text-2xl font-semibold">
          {compare1.grands_prix_entered}{" "}
          <span className="text-red-600 text-2xl font-extrabold">
            Races Entered
          </span>{" "}
          {compare2.grands_prix_entered}
        </h1>
        <h1 className="text-2xl font-semibold">
          {compare1.teams[0].team.name}{" "}
          <span className="text-red-600 text-2xl font-extrabold">Team</span>{" "}
          {compare2.teams[0].team.name}
        </h1>
        <h1 className="text-2xl font-semibold">
          {compare1.world_championships}{" "}
          <span className="text-red-600 text-2xl font-extrabold">
            World Championships
          </span>{" "}
          {compare2.world_championships}
        </h1>
        <h1 className="text-2xl font-semibold">
          {getAge(compare1.birthdate).toFixed(0)}{" "}
          <span className="text-red-600 text-2xl font-extrabold">Age</span>{" "}
          {getAge(compare2.birthdate).toFixed(0)}
        </h1>
        <button
          onClick={() => handleClear()}
          className="mt-2 mx-auto w-40 py-2 text-sm rounded shadow bg-slate-200 hover:bg-slate-400 text-slate-500 hover:text-black"
        >
          Clear
        </button>
      </div>
      <div className="wrapper relative justify-center rounded-2xl bg-gray-200 text-gray-900 h-[270px] w-[231px]">
        <div className="justify-center">
          <img
            src={compare2.image}
            alt={compare2.name}
            className="m-auto min-h-[206px] min-w-[206px] select-none"
          />

          <div className="relative px-2 -mt-16  ">
            <div className="bg-white p-3 mt-12 mb-3 rounded-lg shadow-2xl static ">
              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                {compare2.name}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareCard;
