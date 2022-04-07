import React, { useState, useEffect } from "react";
import axios from "axios";
import TeamCard from "./TeamCard";
const TeamStandings = () => {
  const [teams, setTeams] = useState([]);
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
  return (
    <div className="text-center bg-gray-50">
      <h1 className="text-5xl mb-8  text-center font-semibold">
        Current Team Rankings
      </h1>
      <div className="text-center justify-center flex gap-3 flex-wrap ">
        {teams.map((team) => (
          <TeamCard key={team.team.id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default TeamStandings;
