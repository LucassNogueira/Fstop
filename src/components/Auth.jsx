import React, { useState, useEffect, useReducer } from "react";
import { getAuth } from "firebase/auth";
import { doc, getFirestore, getDoc } from "firebase/firestore";
export const AuthContext = React.createContext();
export const authReducer = (state, action) => {
  // console.log(state, action);
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
  const [userDoc, setUserDoc] = useState({});
  const db = getFirestore();

  const [state, dispatch] = useReducer(authReducer, { user: null });
  // console.log("AuthContextProvider: State", state);
  const auth = getAuth();
  useEffect(() => {
    const subscriber = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: "LOGIN", payload: user });
        // setCurrentUser(user);
        getDoc(doc(db, "Users", user.uid)).then((snap) => {
          setUserDoc(snap.data());
        });
      }
    });

    return subscriber;
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{
        setUserDoc,
        userDoc,
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
