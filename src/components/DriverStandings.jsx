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
    <>
      <h1 className="text-2xl text-center font-semibold">
        Current Driver Rankings
      </h1>
      <div className="text-center flex gap-3 flex-wrap">
        {drivers.map((driver) => (
          //   <div key={driver.driver.id}>
          //     {driver.driver.name}
          //     <img
          //       className="h-52"
          //       src={driver.driver.image}
          //       alt={driver.driver.name}
          //     />
          //   </div>
          <DriverCard driver={driver} />
        ))}
      </div>
    </>
  );
};

export default DriverStandings;
