import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/Auth";
import DriverStandings from "./components/pages/DriverStandings";
import { SignUp, Login } from "./components/index";
import NavBar from "./components/Navbar/NavBar";
import HomePage from "./components/pages/HomePage";
import LoggedUser from "./components/pages/LoggedUser";
import Profile from "./components/pages/Profile";
import TeamStandings from "./components/pages/TeamStandings";
import Circuit from "./components/pages/Circuit";
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/circuits" element={<Circuit />} />
            <Route path="/drivers" element={<DriverStandings />} />
            <Route path="/teams" element={<TeamStandings />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/logged" element={<LoggedUser />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
