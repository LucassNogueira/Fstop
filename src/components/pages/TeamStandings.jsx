import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import TeamCard from "../Cards/TeamCard";
import { AuthContext } from "../Auth";
import { doc, updateDoc, getFirestore } from "firebase/firestore";
const TeamStandings = () => {
  const { currentUser } = useContext(AuthContext);
  const [teams, setTeams] = useState([]);
  const [faveTeam, setFaveTeam] = useState("");
  useEffect(() => {
    axios
      .get("https://v1.formula-1.api-sports.io/rankings/teams?season=2022", {
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_APP_API_KEY,
          "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
        },
      })
      .then((res) => setTeams(res.data.response))
      .catch((error) => console.log(error));
  }, []);
  const id = currentUser.uid;
  const db = getFirestore();
  const docRef = doc(db, "Users", id);
  const handleClick = (team) => {
    setFaveTeam(team);
    axios
      .get(`https://v1.formula-1.api-sports.io/teams?name=${team.team.name}`, {
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_APP_API_KEY,
          "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
        },
      })
      .then((res) =>
        updateDoc(docRef, {
          favTeam: res.data.response,
        })
      )
      .catch((error) => console.log(error));
  };
  return (
    <div className="text-center bg-gray-50 mt-16">
      <h1 className="text-5xl mb-8  text-center font-semibold">
        Current Team Rankings
      </h1>
      <div className="text-center justify-center flex gap-3 flex-wrap ">
        {teams.map((team) => (
          <TeamCard
            key={team.team.id}
            team={team}
            faveTeam={faveTeam}
            setFaveTeam={setFaveTeam}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamStandings;
