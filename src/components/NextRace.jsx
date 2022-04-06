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
    <>
      <div className="flex flex-col  w-full h-full">
        <div className=" w-full" key={displayRace[0]?.id}>
          <h1 className="text-3xl font-semibold text-center pt-4">
            {displayRace[0]?.competition.name}
          </h1>
          <img
            alt={`track:${displayRace[0]?.circuit.name}`}
            src={displayRace[0]?.circuit?.image}
            className=" m-auto h-[150px]"
          />
        </div>
      </div>
    </>
  );
};

export default NextRace;
