import React, { useContext } from "react";
import { AuthContext } from "./Auth";
const FavTeam = () => {
  const { userDoc } = useContext(AuthContext);

  return (
    <section className="text-gray-600 mb-5 mt-5 body-font py-10 border-y-2 border-indigo-600">
      <div className="container mx-auto flex px-0 py-0 md:flex-row flex-col items-center">
        <div className="lg:max-w-xl lg:w-full lg:h-full md:w-full w-full mb-10 md:mb-0">
          <img
            className="mx-auto"
            alt={userDoc?.favTeam?.name}
            src={userDoc?.favTeam?.logo}
          />
        </div>
        <div className=" md:w-1/2  flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {userDoc?.favTeam.name}
          </h1>
          <p className="mb-8 leading-relaxed">
            {userDoc?.favTeam.name} has accumulated{" "}
            {userDoc?.favTeam.fastest_laps} fastest laps, with a PSU built by{" "}
            {userDoc?.favTeam.engine}. Since the teams entry into Formula 1 in{" "}
            {userDoc?.favTeam.first_team_entry}, the team has held pole position{" "}
            {userDoc?.favTeam.pole_positions} times. Team principal,{" "}
            {userDoc?.favTeam.director}, continues to strive to turn{" "}
            {userDoc?.favTeam.name}'s {userDoc?.favTeam.world_championships}{" "}
            world championships into {userDoc?.favTeam.world_championships + 1}.
          </p>
          <div className="flex justify-center"></div>
        </div>
      </div>
    </section>
  );
};

export default FavTeam;
