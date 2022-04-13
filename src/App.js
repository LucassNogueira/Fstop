import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/Auth";
import DriverStandings from "./components/pages/DriverStandings";
import { SignUp, Login, Splash } from "./components/index";
import NavBar from "./components/Navbar/NavBar";
import LoggedUser from "./components/pages/LoggedUser";
import Profile from "./components/pages/Profile";
import TeamStandings from "./components/pages/TeamStandings";
import Circuit from "./components/pages/Circuit";
import NotFoundPage from "./components/pages/NotFoundPage";
import News from "./components/pages/News";
import Footer from "./components/Navbar/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <NavBar />

          <Routes>
            <Route exact path="/" element={<Splash />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/circuits" element={<Circuit />} />
            <Route path="/drivers" element={<DriverStandings />} />
            <Route path="/teams" element={<TeamStandings />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/logged" element={<LoggedUser />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/news" element={<News />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
