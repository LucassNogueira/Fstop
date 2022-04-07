import React, { useContext } from "react";
import { AuthContext } from "../Auth";
import NewsCards from "../Cards/NewsCards";
import NextRace from "../NextRace";
import HomePage from "./HomePage";
const LoggedUser = () => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? (
    <main className="bg-gray-50">
      <NextRace />
      <NewsCards />
    </main>
  ) : (
    <HomePage />
  );
};

export default LoggedUser;
