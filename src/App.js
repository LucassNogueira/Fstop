import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/Auth";
import { Home, SignUp, Login, PrivateRoute, Splash } from "./components/index";
import NavBar from "./components/NavBar";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/splash" element={<Splash />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
