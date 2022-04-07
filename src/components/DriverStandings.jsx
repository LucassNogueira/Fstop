import React, { useState, useEffect } from "react";
import axios from "axios";
import DriverCard from "./DriverCard";
const DriverStandings = () => {
  const [drivers, setDrivers] = useState([]);
  useEffect(() => {
    axios
      .get("https://v1.formula-1.api-sports.io/rankings/drivers?season=2022", {
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_APP_API_KEY,
          "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
        },
      })
      .then((res) => setDrivers(res.data.response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="text-center bg-gray-50">
      <h1 className="text-5xl mb-8  text-center font-semibold">
        Current Driver Rankings
      </h1>
      <div className="text-center justify-center flex gap-6 flex-wrap ">
        {drivers.map((driver) => (
          <DriverCard key={driver.driver.id} driver={driver} />
        ))}
      </div>
    </div>
  );
};

export default DriverStandings;
