import React, { useContext } from "react";
import { AuthContext } from "./Auth";

const FavTrack = () => {
  const { userDoc } = useContext(AuthContext);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h6 className="text-5xl mb-12 text-center font-bold lg:text-5xl xl:text-8xl">
        {userDoc?.favTrack?.competition.name}
      </h6>
      <img
        src={userDoc?.trackImg?.img}
        alt="Fav-img"
        className="h-96 mx-auto "
      />
      <div className="grid grid-cols-1 mx-auto mt-5 row-gap-3 md:grid-cols-3 ">
        <div className="text-center md:border-r md:border-slate-500">
          <h6 className="mb-3 text-4xl font-bold lg:text-5xl xl:text-6xl text-indigo-600">
            {userDoc?.favTrack.distance}
          </h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Distance
          </p>
        </div>
        <div className="text-center md:border-r md:border-slate-500">
          <h6 className="mb-3 text-4xl font-bold lg:text-5xl xl:text-6xl text-indigo-600">
            {userDoc?.favTrack.laps.total}
          </h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Laps
          </p>
        </div>
        <div className="text-center ">
          <h6 className="mb-3 text-4xl font-bold lg:text-5xl xl:text-6xl text-indigo-600">
            {userDoc?.favTrack.competition.location.city}
          </h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            City
          </p>
        </div>
      </div>
    </div>
  );
};

export default FavTrack;
