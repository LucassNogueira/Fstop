import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth();

export default app;

export function signUp(email, password, displayName) {
  return createUserWithEmailAndPassword(auth, email, password, displayName);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logOut() {
  return signOut(auth);
}

export function newDocument(entriesDB, currentUser) {
  entriesDB
    .doc(currentUser.uid)
    .set({
      uid: currentUser.uid,
      firstName: "",
      lastName: "",
      email: currentUser.email,
      favDriver: {},
      favTrack: {},
      favTeam: {},
    })
    .catch((err) => alert(err));
}
