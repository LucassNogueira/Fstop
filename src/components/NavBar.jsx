import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import logo from "./media/logof1.svg";
import NavItem from "./NavItem";
import { logOut } from "../firebase/base";
const NavBar = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  async function handleLogout() {
    await logOut();
    await setCurrentUser(null);
  }
  return (
    <nav
      className="shadow-md w-full fixed top-0 left-0 z-10 flex justify-end
   items-center gap-4 h-14 bg-gray-50"
    >
      <Link to={!currentUser ? "/" : "/logged"}>
        <img alt="logo" className="h-9 absolute left-0 top-3" src={logo} />
      </Link>
      {currentUser?.displayName}
      <ul className="flex justify-end mr-7 items-center space-x-7">
        <NavItem content="Home" href={!currentUser ? "/" : "/logged"} />
        <NavItem content="Profile" href="/profile" />
        {currentUser && (
          <li className="md:ml-8  md:my-0 my-7">
            <button
              className=" text-lg font-semibold list-none"
              onClick={handleLogout}
            >
              Sign Out
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
