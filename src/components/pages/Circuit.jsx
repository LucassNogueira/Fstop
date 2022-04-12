import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import CircuitCard from "../Cards/CircuitCard";
import { AuthContext } from "../Auth";
import { doc, updateDoc, getFirestore } from "firebase/firestore";
import { trackDB } from "../trackimages";
const Circuit = () => {
  const { currentUser, setUserDoc, userDoc } = useContext(AuthContext);

  const [circuits, setCircuits] = useState([]);
  useEffect(() => {
    axios
      .get("https://v1.formula-1.api-sports.io/races?season=2022&type=race", {
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_APP_API_KEY,
          "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
        },
      })
      .then((res) => setCircuits(res.data.response))
      .catch((error) => console.log(error));
  }, []);

  const db = getFirestore();
  const handleClick = (circuit) => {
    const docRef = doc(db, "Users", currentUser.uid);
    updateDoc(docRef, {
      favTrack: circuit,
    });
    setUserDoc((prevState) => {
      return {
        ...prevState,
        favTrack: circuit,
      };
    });
    const trackImg = trackDB.filter((track) => track.id === circuit.circuit.id);
    updateDoc(docRef, {
      trackImg: trackImg,
    });
    setUserDoc((prevState) => {
      return {
        ...prevState,
        trackImg: trackImg,
      };
    });
  };

  return (
    <div className="text-center bg-gray-50 mt-16">
      <h1 className="text-5xl mb-8  text-center font-semibold">All Circuits</h1>
      <div className="text-center justify-center flex gap-6 flex-wrap ">
        {circuits.map((circuit) => (
          <CircuitCard
            key={circuit.circuit.id}
            circuit={circuit}
            handleClick={handleClick}
            userDoc={userDoc}
          />
        ))}
      </div>
    </div>
  );
};

export default Circuit;
