import React, { useContext, useEffect } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { GiFullMotorcycleHelmet, GiTeamIdea, GiExitDoor } from "react-icons/gi";
import { FaFlagCheckered, FaChevronDown } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { Link } from "react-router-dom";
import { logOut } from "../../firebase/base";
import { AuthContext } from "../Auth";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown() {
  const { setUserDoc, userDoc, dispatch } = useContext(AuthContext);
  async function handleLogout() {
    await logOut();
    // await setCurrentUser(null);
    await setUserDoc(null);
    await dispatch({ type: "LOGOUT", payload: null });
  }

  return (
    <Menu as="div" className="relative inline-block ">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-lg font-semibold rounded-md border hover:bg-gray-200 ">
          {userDoc?.displayName}
          <FaChevronDown
            className="-mr-1 ml-2 h-4 w-5 mt-2 animate-bounce "
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-40 rounded-md bg-white ring-1 ring-gray-700 ">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/drivers"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "group flex items-center px-4 py-2 text-sm"
                  )}
                >
                  <GiFullMotorcycleHelmet
                    className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  Favorite Driver
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/circuits"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "group flex items-center px-4 py-2 text-sm"
                  )}
                >
                  <FaFlagCheckered
                    className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  Favorite Circuit
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/teams"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "group flex items-center px-4 py-2 text-sm"
                  )}
                >
                  <GiTeamIdea
                    className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  Favorite Team
                </Link>
              )}
            </Menu.Item>
            {/* <Menu.Item>
              {({ active }) => (
                <Link
                  to="/profile"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "group flex items-center px-4 py-2 text-sm"
                  )}
                >
                  <ImProfile
                    className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  My Profile
                </Link>
              )}
            </Menu.Item> */}
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/"
                  onClick={handleLogout}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "group flex items-center px-4 py-2 text-sm"
                  )}
                >
                  <GiExitDoor
                    className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  Sign Out
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
