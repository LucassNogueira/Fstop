import React, { useState, useEffect } from "react";
import axios from "axios";

const NextRace = () => {
  const [race, setRace] = useState([]);

  useEffect(() => {
    axios
      .get("https://v1.formula-1.api-sports.io/races?season=2022&type=race", {
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_APP_API_KEY,
          "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
        },
      })
      .then((res) => setRace(res.data.response))
      .catch((error) => console.log(error));
  }, []);

  let displayRace = race.filter((race) => {
    return race.status === "Scheduled";
  });

  return (
    <div className="bg-gray-50">
      <div className="relative bg-gray-900 mt-16 max-w-6xl m-auto shadow-xl">
        <div className="h-40 lg:w-1/4 bg-gray-50 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="w-full h-full object-contain border-2"
            src={displayRace[0]?.circuit?.image}
            alt={`track:${displayRace[0]?.circuit.name}`}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-10">
          <div className="lg:w-full lg:ml-40 md:ml-auto md:w-1/2 md:pl-10 text-center">
            <h2 className="text-2xl font-semibold uppercase tracking-wider text-gray-300">
              Petrol is in the air at the
            </h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              {displayRace[0]?.competition?.name}
            </p>
            <span className=" text-xl text-gray-300">
              {" "}
              <p className="mt-3">Total Laps: {displayRace[0]?.laps.total}</p>
              <p className="mt-3">Date: {displayRace[0]?.date.slice(0, 10)}</p>
              <p className="mt-3">
                Race Distance:{" "}
                {Number(displayRace[0]?.distance.slice(0, 5) / 1.609).toFixed(
                  2
                )}{" "}
                Miles
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextRace;
