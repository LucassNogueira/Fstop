import React, { useContext } from "react";
import { AuthContext } from "../Auth";
import { login } from "../../firebase/base";
import { useNavigate, Link } from "react-router-dom";
import logo from "../media/logof1.svg";
import background from "../media/rbbg.jpg";
const Login = () => {
  const Swal = require("sweetalert2");
  const navigate = useNavigate();
  const { dispatch, state } = useContext(AuthContext);
  async function handleLogin(e) {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      await login(email.value, password.value).then((userCredential) => {
        const user = userCredential.user;
        // setCurrentUser(user);
        dispatch({ type: "LOGIN", payload: user });
      });

      navigate(`/logged`);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  }

  return (
    <>
      <div className="bg-log-in h-screen bottom-20 w-full ">
        <div className=" h-[50%] absolute bottom-1/3 left-16 sm:left-1/3 sm:w-[30%] flex items-center justify-center sm:px-6 lg:px-8 bg-gray-200 w-[70%] m-auto bg-opacity-80">
          <div className="w-10/12 space-y-8">
            <div>
              <img
                className="mx-auto h-20 object-cover"
                src={logo}
                alt="Workflow"
              />
              <h2 className="mt-5 text-center text-3xl font-extrabold text-gray-900">
                Login
              </h2>
            </div>
            <form className=" space-y-4" onSubmit={handleLogin}>
              <div className=" rounded-md shadow-sm ">
                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    className="bg-white w-full block px-3 py-2   placeholder-gray-500 text-gray-900 rounded-md  sm:text-sm my-2"
                    placeholder="Email address"
                  />
                </label>
                <label>
                  Password
                  <input
                    name="password"
                    type="password"
                    required
                    className="bg-white w-full block px-3 py-2  placeholder-gray-500 text-gray-900 rounded-md sm:text-sm my-2"
                    placeholder="Password"
                  />
                </label>
              </div>
              <div className="text-center text-sm">
                <Link to="/signup">
                  <span className="font-medium text-indigo-600 hover:text-indigo-500">
                    Don't have an account? Signup!
                  </span>
                </Link>
              </div>
              <div className="flex justify-center mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <button
                  className=" relative w-4/5 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  type="submit"
                >
                  Login!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
