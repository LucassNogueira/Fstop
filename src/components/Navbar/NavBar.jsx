import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth";
import logo from "../media/logof1.svg";
import NavItem from "./NavItem";
import DropDown from "./DropDown";
const NavBar = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  return (
    <nav
      className="shadow-md w-full fixed top-0 left-0 z-10 flex justify-end
   items-center gap-4 h-14 bg-gray-50"
    >
      <Link to={!currentUser ? "/" : "/logged"}>
        <img alt="logo" className="h-9 absolute left-0 top-3" src={logo} />
      </Link>

      <ul className="flex justify-end mr-7 items-center space-x-7">
        <NavItem content="Home" href={!currentUser ? "/" : "/logged"} />
        {currentUser && <DropDown />}
      </ul>
    </nav>
  );
};

export default NavBar;
