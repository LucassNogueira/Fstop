import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth";
import Cards from "../Cards";
import LoggedSplash from "../LoggedSplash";
import HomePage from "./HomePage";
const LoggedUser = () => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? (
    <main>
      <LoggedSplash />
      <Cards />
    </main>
  ) : (
    <HomePage />
  );
};

export default LoggedUser;
