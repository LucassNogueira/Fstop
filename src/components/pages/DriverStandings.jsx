import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import DriverCard from "../Cards/DriverCard";
import { AuthContext } from "../Auth";
import { doc, updateDoc, getFirestore } from "firebase/firestore";
const DriverStandings = () => {
  const { currentUser } = useContext(AuthContext);
  const [drivers, setDrivers] = useState([]);
  const [faveDriver, setFaveDriver] = useState({});

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
  const id = currentUser.uid;
  const db = getFirestore();
  const driverRef = doc(db, "Users", id);

  const handleClick = (driver) => {
    setFaveDriver(driver);
    axios
      .get(
        `https://v1.formula-1.api-sports.io/drivers?name=${driver.driver.name}`,
        {
          headers: {
            "x-rapidapi-key": process.env.REACT_APP_APP_API_KEY,
            "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
          },
        }
      )
      .then((res) =>
        updateDoc(driverRef, {
          favDriver: res.data.response,
        })
      )
      .catch((error) => console.log(error));
  };

  return (
    <div className="text-center bg-gray-50 mt-16">
      <h1 className="text-5xl mb-8  text-center font-semibold">
        Current Driver Rankings
      </h1>
      <div className="text-center justify-center flex gap-6 flex-wrap ">
        {drivers.map((driver) => (
          <DriverCard
            key={driver.driver.id}
            faveDriver={faveDriver}
            setFaveDriver={setFaveDriver}
            driver={driver}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default DriverStandings;
