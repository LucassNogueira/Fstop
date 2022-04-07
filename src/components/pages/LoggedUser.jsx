import React, { useContext } from "react";

import { AuthContext } from "../Auth";
import Cards from "../Cards";
import LoggedSplash from "../LoggedSplash";
import NextRace from "../NextRace";
import TeamStandings from "../TeamStandings";
import HomePage from "./HomePage";
const LoggedUser = () => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? (
    <main className="bg-gray-50">
      <NextRace />
      <LoggedSplash />
      <TeamStandings />
      <Cards />
    </main>
  ) : (
    <HomePage />
  );
};

export default LoggedUser;
