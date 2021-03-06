import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth";
import logo from "../media/logof1.svg";

import DropDown from "./DropDown";
const NavBar = () => {
  const { state } = useContext(AuthContext);

  return (
    <nav
      className="shadow-md w-full fixed top-0 left-0 z-40 flex justify-end
   items-center gap-4 h-14 bg-gray-50"
    >
      <Link to={!state.user ? "/" : "/logged"}>
        <img alt="logo" className="h-9 absolute left-0 top-3" src={logo} />
      </Link>

      <ul className="flex justify-end mr-7 items-center space-x-7">
        <li className="md:ml-8 md:my-0 my-7 text-lg font-semibold list-none">
          <Link to={!state.user ? "/" : "/logged"}>Home</Link>
        </li>
        {state.user && <DropDown />}
      </ul>
    </nav>
  );
};

export default NavBar;
