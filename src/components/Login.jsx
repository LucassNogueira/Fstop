import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import { login } from "../firebase/base";
const Login = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    login(email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <button onClick={() => console.log(currentUser)}> Check user</button>
      <form onSubmit={handleLogin}>
        <label>
          Email{"  "}
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password{"  "}
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">LogIn!</button>
      </form>
    </>
  );
};

export default Login;
