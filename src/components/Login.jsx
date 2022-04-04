import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import { login } from "../firebase/base";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser, setPending } = useContext(AuthContext);
  async function handleLogin(e) {
    e.preventDefault();
    const { email, password } = e.target.elements;

    try {
      await login(email.value, password.value)
        .then((userCredential) => {
          setPending(true);
          const user = userCredential.user;
          setCurrentUser(user);
          setPending(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  if (currentUser) {
    return navigate("/splash", { replace: true });
  }

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
