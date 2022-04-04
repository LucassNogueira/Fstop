import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import logo from "./media/logof1.svg";
const NavBar = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <nav className="flex justify-center gap-4 h-10 w-screen bg-white bg-opacity-90">
      <Link to="/">
        <img alt="logo" className="h-9 absolute left-2 top-1" src={logo} />
      </Link>
      {/* <Link to="/login">
        <button>Click me to Login!</button>
      </Link>
      <Link to="/signup">
        <button>Signup</button>
      </Link> */}
      <div>Currently Logged in as : {currentUser?.email}</div>
    </nav>
  );
};

export default NavBar;
