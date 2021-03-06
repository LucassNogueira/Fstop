import React, { useContext, useState } from "react";
import { AuthContext } from "../Auth";
import { Link, useNavigate } from "react-router-dom";
import logo from "../media/logof1.svg";
import { getAuth, sendEmailVerification } from "firebase/auth";
import firebase, { signUp, newDocument } from "../../firebase/base";
const entriesDB = firebase.firestore().collection("Users");
const SignUp = () => {
  const Swal = require("sweetalert2");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const auth = getAuth();

  async function handleSignUp(e) {
    e.preventDefault();
    const { email, password, displayName } = e.target.elements;
    try {
      await signUp(email.value, password.value, displayName.value).then(
        (results) => {
          const user = results.user;
          // setCurrentUser(user);
          dispatch({ type: "LOGIN", payload: user });
          newDocument(entriesDB, user, displayName.value);
        }
      );
      await sendEmailVerification(auth.currentUser).catch((error) =>
        console.log(error)
      );
      navigate("/logged");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  }
  return (
    <div className="bg-f1-pic h-screen bottom-20 w-full ">
      <div className=" h-[60%] absolute bottom-1/4 left-16 sm:left-1/3 sm:w-[30%] flex items-center px-6 justify-center sm:px-6 lg:px-8 bg-gray-200 w-[70%] m-auto bg-opacity-80">
        <div className="space-y-8">
          <div>
            <img className="mx-auto h-20" src={logo} alt="Workflow" />
            <h2 className="mt-5 text-center text-3xl font-extrabold text-gray-900">
              Register a new account
            </h2>
          </div>
          <form className=" space-y-4" onSubmit={handleSignUp}>
            <div className=" rounded-md shadow-sm ">
              <label>
                Display Name
                <input
                  name="displayName"
                  type="displayName"
                  required
                  className="bg-white relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-2"
                  placeholder="Display Name"
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  required
                  className="bg-white relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-2"
                  placeholder="Email address"
                />
              </label>
              <label>
                Password
                <input
                  name="password"
                  type="password"
                  required
                  className="bg-white relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-2"
                  placeholder="Password"
                />
              </label>
            </div>
            <div className="text-center text-sm">
              <Link to="/login">
                <span className="font-medium text-indigo-600 hover:text-indigo-500">
                  Already have an account? Login!
                </span>
              </Link>
            </div>
            <div className="flex justify-center">
              <button
                className=" relative w-4/5 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="submit"
              >
                Sign Up!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
