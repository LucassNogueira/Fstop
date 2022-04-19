import React, { useState, useEffect } from "react";
import axios from "axios";

import { trackDB } from "./trackimages";
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
  let nextRace = displayRace[0];

  let betterImg = trackDB.filter((image) => {
    return image.id === nextRace?.circuit.id;
  });
  function formatDate(dateStr) {
    let [year, month, day] = dateStr.split("-");
    let newDate = `${month}/${day}/${year}`;
    return newDate;
  }

  return (
    <div className="relative shadow-lg bg-gray-5 mt-16">
      <div className=" bg-gray-50 sm:h-72 lg:absolute lg:-ml-1 lg:h-full lg:w-1/3 z-10 ">
        <img
          className="w-full h-full object-contain "
          src={betterImg[0]?.img}
          alt={`track:${displayRace[0]?.circuit.name}`}
        />
      </div>
      <div className="relative bg-gray-900 items-center text-center lg:-ml-96 px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="max-w-2xl mx-auto  lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
          <div></div>
          <h2 className="mt-6 text-4xl font-extrabold text-gray-300 sm:text-6xl tracking-wider">
            Petrol is in the air at the
          </h2>
          <p className="mt-6 text-3xl font-bold tracking-wider sm:text-4xl text-white">
            {displayRace[0]?.competition?.name}{" "}
          </p>
          <div className="mt-8 overflow-hidden">
            <dl className="-mx-8 -mt-8 flex flex-wrap justify-center">
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">
                  Country
                </dt>
                <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">
                  {displayRace[0]?.competition.location.country}
                </dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">
                  Laps
                </dt>
                <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">
                  {displayRace[0]?.laps.total}
                </dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">
                  Race Distance
                </dt>
                <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">
                  {Number(displayRace[0]?.distance.slice(0, 5) / 1.609).toFixed(
                    0
                  )}{" "}
                  Miles
                </dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">
                  Date
                </dt>
                <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">
                  {displayRace[0]?.date.slice(0, 10)
                    ? formatDate(displayRace[0]?.date.slice(0, 10))
                    : ""}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextRace;
