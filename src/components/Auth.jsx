import React, { useState, useEffect, useReducer } from "react";
import { getAuth } from "firebase/auth";
export const AuthContext = React.createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(authReducer, { user: null });
  // console.log("AuthContextProvider: State", state);
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

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, ...state, dispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};
