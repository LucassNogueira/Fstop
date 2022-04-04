import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import { signUp } from "../firebase/base";
const SignUp = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  async function handleSignUp(e) {
    e.preventDefault();
    const { email, password } = e.target.elements;
    await signUp(email.value, password.value).then((userCredential) => {
      const user = userCredential.user;
      setCurrentUser(user);
    });
  }
  return (
    <div>
      <button onClick={() => console.log(currentUser)}> Check user</button>
      <form onSubmit={handleSignUp}>
        <label>
          Email{"  "}
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password{"  "}
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up!</button>
      </form>
    </div>
  );
};

export default SignUp;
