import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { logOut } from "../firebase/base";
import { AuthContext } from "./Auth";
const Home = () => {
  const { setCurrentUser } = useContext(AuthContext);
  async function handleLogout() {
    await logOut();
    await setCurrentUser(null);
  }
  return (
    <div>
      <h1>Home</h1>
      <p>Would you like to sign out?</p>
      <button
        className="py-2 px-4 bg-gray-300  rounded-lg shadow-md hover:bg-gray-600"
        onClick={handleLogout}
      >
        Click me to signout!
      </button>
      <p>Would you like to login?</p>
      <Link to="/login">
        <button className="py-2 px-4 bg-gray-300  rounded-lg shadow-md hover:bg-gray-600">
          Click me to Login!
        </button>
      </Link>
      <p>Would you like to Signup?</p>
      <Link to="/signup">
        <button className="py-2 px-4 bg-gray-300  rounded-lg shadow-md hover:bg-gray-600">
          Click me to SignUp!
        </button>
      </Link>
    </div>
  );
};

export default Home;
