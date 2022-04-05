import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth";
import Cards from "../Cards";
import Splash from "../Splash";
const LoggedUser = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  if (currentUser) {
    return (
      <main>
        <Splash />
        <Cards />
      </main>
    );
  }
  return navigate("/", { replace: true });
};

export default LoggedUser;
