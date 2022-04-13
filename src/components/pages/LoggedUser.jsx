import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Auth";
import NewsCards from "../Cards/NewsCards";
import NextRace from "../NextRace";
import FavDriver from "../FavDriver";
import FavTrack from "../FavTrack";
import FavTeam from "../FavTeam";

const LoggedUser = () => {
  const { userDoc } = useContext(AuthContext);

  return (
    <main className="bg-gray-50">
      <NextRace />
      {userDoc?.favDriver && <FavDriver />}
      {userDoc?.favTrack && <FavTrack />}
      {userDoc?.favTeam && <FavTeam />}
      <NewsCards />
    </main>
  );
};

export default LoggedUser;
