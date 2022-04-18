import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import DriverCard from "../Cards/DriverCard";
import { AuthContext } from "../Auth";
import { doc, updateDoc, getFirestore, getDoc } from "firebase/firestore";
import { halfDB } from "../halfimages";
import CompareCard from "../CompareCard";

const DriverStandings = () => {
  const { userDoc, setUserDoc, state } = useContext(AuthContext);
  const [drivers, setDrivers] = useState([]);
  const [faveDriver, setFaveDriver] = useState({});
  const [compare1, setCompare1] = useState(null);
  const [compare2, setCompare2] = useState(null);
  const db = getFirestore();

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

  const setFav = (value) => {
    setFaveDriver(value);
  };
  const handleClick = (driver) => {
    //driver coming in is the actual driver object
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
        // console.log(res.data.response);
        setUserDoc((prevState) => {
          let newState = prevState;
          newState.favDriver = res.data.response[0];
          return newState;
        });
        const driverRef = doc(db, "Users", state.user.uid);
        setFav(res.data.response[0]);
        updateDoc(driverRef, {
          favDriver: res.data.response[0],
        });
      })
      .catch((error) => console.log(error));
    const driverRef = doc(db, "Users", state.user.uid);
    const half = halfDB.filter((pic) => pic.id === driver.driver.id);
    updateDoc(driverRef, {
      halfImg: half[0],
    });
    setUserDoc((prevState) => {
      let newState = prevState;
      newState.halfImg = half[0];
      return newState;
    });
  };

  const handleCompare = (driver) => {
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
      .then((res) => setCompare1(res.data.response[0]))
      .catch((error) => console.log(error));
  };
  const handleCompare2 = (driver) => {
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
      .then((res) => setCompare2(res.data.response[0]))
      .catch((error) => console.log(error));
  };
  const handleClear = () => {
    setCompare1(null);
    setCompare2(null);
  };
  return (
    <div className="text-center bg-gray-50 mt-16">
      {compare1 && compare2 && (
        <CompareCard
          compare1={compare1}
          compare2={compare2}
          handleClear={handleClear}
        />
      )}
      <h1 className="text-5xl mb-8  text-center font-semibold">
        Current Driver Rankings
      </h1>

      <div className="text-center justify-center flex gap-6 flex-wrap mb-5">
        {drivers.map((driver) => (
          <DriverCard
            key={driver.driver.id}
            driver={driver}
            handleClick={handleClick}
            handleCompare={handleCompare}
            handleCompare2={handleCompare2}
          />
        ))}
      </div>
    </div>
  );
};

export default DriverStandings;
