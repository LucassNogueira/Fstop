import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
const NavBar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/login">
        <button>Click me to Login!</button>
      </Link>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
      <div>Currently Logged in as : {currentUser?.email}</div>
    </>
  );
};

export default NavBar;
