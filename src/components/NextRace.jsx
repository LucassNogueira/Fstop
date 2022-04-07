import React, { useState, useEffect } from "react";
import axios from "axios";

const NextRace = () => {
  const [race, setRace] = useState([]);
  const [weather, setWeather] = useState([]);
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
    <>
      <div className="flex flex-col  w-full h-full">
        <div className="text-center w-full" key={displayRace[0]?.id}>
          <h1 className="text-3xl font-semibold text-center pt-4">
            {displayRace[0]?.circuit.name}
          </h1>
          <img
            alt={`track:${displayRace[0]?.circuit.name}`}
            src={displayRace[0]?.circuit?.image}
            className=" m-auto mt-5 h-[170px]"
          />
          <p className="text-2xl font-semibold mt-5">
            Date: {displayRace[0]?.date.slice(0, 10)}
          </p>
          <p className="text-2xl font-semibold mt-5">
            Total Laps: {displayRace[0]?.laps.total}
          </p>
          <p className="text-2xl font-semibold mt-5">
            Race Distance:{" "}
            {Number(displayRace[0]?.distance.slice(0, 5) / 1.609).toFixed(2)}{" "}
            Miles
          </p>
        </div>
      </div>
    </>
  );
};

export default NextRace;
