import React, { useContext } from "react";
import { AuthContext } from "../Auth";
import NewsCards from "../Cards/NewsCards";
import NextRace from "../NextRace";
import Splash from "./Splash";

const LoggedUser = () => {
  const { currentUser, halfPic, setHalfPic } = useContext(AuthContext);

  return currentUser ? (
    <main className="bg-gray-50">
      <NextRace />
      {halfPic[0] ? <img src={halfPic[0]?.img} alt="img" /> : ""}
      <NewsCards />
    </main>
  ) : (
    <Splash />
  );
};

export default LoggedUser;
