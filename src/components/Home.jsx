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
      <button onClick={handleLogout}>Click me to signout!</button>
      <p>Would you like to login?</p>
      <Link to="/login">
        <button>Click me to Login!</button>
      </Link>
      <p>Would you like to Signup?</p>
      <Link to="/signup">
        <button>Click me to SignUp!</button>
      </Link>
    </div>
  );
};

export default Home;
