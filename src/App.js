import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/Auth";
import { Home, SignUp, Login, PrivateRoute, Splash } from "./components/index";
import NavBar from "./components/NavBar";
import { onAuthStateChanged, getAuth } from "firebase/auth";
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
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
