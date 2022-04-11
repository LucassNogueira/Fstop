import React, { useState, useEffect, useReducer } from "react";
import { getAuth } from "firebase/auth";
import { doc, updateDoc, getFirestore, getDoc } from "firebase/firestore";
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
  const [halfPic, setHalfPic] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const db = getFirestore();

  const [state, dispatch] = useReducer(authReducer, { user: null });
  // console.log("AuthContextProvider: State", state);
  const auth = getAuth();
  useEffect(() => {
    const subscriber = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        getDoc(doc(db, "Users", user.uid)).then((snap) => {
          snap.data();
        });
      } else {
        setCurrentUser(null);
      }
    });

    return subscriber;
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        ...state,
        dispatch,
        halfPic,
        setHalfPic,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
