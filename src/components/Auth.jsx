import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(false);
  const auth = getAuth();
  useEffect(() => {
    const subscriber = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return subscriber;
  }, [auth]);

  if (pending) {
    return <> Loading...</>;
  }
  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, pending, setPending }}
    >
      {children}
    </AuthContext.Provider>
  );
};
