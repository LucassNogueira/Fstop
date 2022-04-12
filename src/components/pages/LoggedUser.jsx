import React, { useContext } from "react";
import { AuthContext } from "../Auth";
import NewsCards from "../Cards/NewsCards";
import NextRace from "../NextRace";
import Splash from "./Splash";

const LoggedUser = () => {
  const { currentUser, userDoc } = useContext(AuthContext);

  return currentUser ? (
    <main className="bg-gray-50">
      <NextRace />
      {userDoc.halfImg ? (
        <img src={userDoc.halfImg[0]?.img} alt="Fav-img" className="h-96" />
      ) : (
        ""
      )}
      {userDoc.trackImg ? (
        <img src={userDoc.trackImg[0]?.img} alt="Fav-img" className="h-96" />
      ) : (
        ""
      )}
      {userDoc.favTrack ? (
        <img
          src={userDoc.favTrack.circuit.image}
          alt="Fav-track"
          className="h-96"
        />
      ) : (
        ""
      )}
      <NewsCards />
    </main>
  ) : (
    <Splash />
  );
};

export default LoggedUser;
