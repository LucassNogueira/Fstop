import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/Auth";
import { SignUp, Login } from "./components/index";
import NavBar from "./components/NavBar";
import HomePage from "./components/pages/HomePage";
import LoggedUser from "./components/pages/LoggedUser";
import Profile from "./components/pages/Profile";
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <NavBar />
          <Routes>
            {/* <Route exact path="/" element={<Splash />}></Route> */}
            <Route exact path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<Login />} />
            {/* <Route path="/signout" element={<Home />} /> */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/logged" element={<LoggedUser />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
