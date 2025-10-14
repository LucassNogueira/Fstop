import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

export async function signUp(email: string, password: string, displayName: string) {
  if (!auth) throw new Error('Auth not initialized');
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function login(email: string, password: string) {
  if (!auth) throw new Error('Auth not initialized');
  return signInWithEmailAndPassword(auth, email, password);
}

export async function logOut() {
  if (!auth) throw new Error('Auth not initialized');
  return signOut(auth);
}

export async function createUserDocument(
  currentUser: User,
  displayName: string
) {
  if (!db) throw new Error('Firestore not initialized');
  
  const userRef = doc(db, 'Users', currentUser.uid);
  
  await setDoc(userRef, {
    uid: currentUser.uid,
    displayName: displayName,
    firstName: '',
    lastName: '',
    email: currentUser.email,
    favDriver: null,
    favTrack: null,
    favTeam: null,
    halfImg: null,
    trackImg: null,
  });
}

