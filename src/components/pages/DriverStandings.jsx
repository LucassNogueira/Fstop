import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import DriverCard from "../Cards/DriverCard";
import { AuthContext } from "../Auth";
import { doc, updateDoc, getFirestore, getDoc } from "firebase/firestore";
import { halfDB } from "../halfimages";

const DriverStandings = () => {
  const { currentUser, userDoc, setUserDoc, auth } = useContext(AuthContext);
  const [drivers, setDrivers] = useState([]);
  const [faveDriver, setFaveDriver] = useState({});
  const [checkName, setCheckName] = useState("");

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

  const db = getFirestore();
  // console.log(userDoc);

  const setFav = (value) => {
    setFaveDriver(value);
  };
  const handleClick = (driver) => {
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
      .then((res) => {
        setUserDoc((prevState) => {
          let newState = prevState;
          newState.favDriver = [res.data.response[0]];
          return newState;
        });
        const driverRef = doc(db, "Users", currentUser.uid);
        setFav(res.data.response[0]);
        updateDoc(driverRef, {
          favDriver: res.data.response,
        });
      })
      .catch((error) => console.log(error));
    const driverRef = doc(db, "Users", currentUser.uid);
    const half = halfDB.filter((pic) => pic.id === driver.driver.id);
    updateDoc(driverRef, {
      halfImg: half,
    });
    setUserDoc((prevState) => {
      let newState = prevState;
      newState.halfImg = half;
      return newState;
    });
  };
  useEffect(() => {
    setFav(userDoc.favDriver);
  }, []);
  return (
    <div className="text-center bg-gray-50 mt-16">
      <h1 className="text-5xl mb-8  text-center font-semibold">
        Current Driver Rankings
      </h1>

      <div className="text-center justify-center flex gap-6 flex-wrap ">
        {drivers.map((driver) => (
          <DriverCard
            key={driver.driver.id}
            driver={driver}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default DriverStandings;
