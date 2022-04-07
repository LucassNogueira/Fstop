import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import CircuitCard from "../Cards/CircuitCard";
import { AuthContext } from "../Auth";
import { doc, updateDoc, getFirestore } from "firebase/firestore";
const Circuit = () => {
  const { currentUser } = useContext(AuthContext);
  const [faveCircuit, setFaveCircuit] = useState("");
  const [circuits, setCircuits] = useState([]);
  useEffect(() => {
    axios
      .get("https://v1.formula-1.api-sports.io/circuits", {
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_APP_API_KEY,
          "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
        },
      })
      .then((res) => setCircuits(res.data.response))
      .catch((error) => console.log(error));
  }, []);
  const id = currentUser.uid;
  const db = getFirestore();
  const docRef = doc(db, "Users", id);
  const handleClick = (circuit) => {
    setFaveCircuit(circuit);
    updateDoc(docRef, {
      favTrack: circuit,
    });
  };

  return (
    <div className="text-center bg-gray-50 mt-16">
      <h1 className="text-5xl mb-8  text-center font-semibold">All Circuits</h1>
      <div className="text-center justify-center flex gap-6 flex-wrap ">
        {circuits.map((circuit) => (
          <CircuitCard
            key={circuit.id}
            circuit={circuit}
            faveCircuit={faveCircuit}
            setFaveCircuit={setFaveCircuit}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Circuit;
