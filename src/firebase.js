import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB8MpJnk6EC1ogJ-_vItDEZNF7sHFoTEso",
  authDomain: "lostandfound-52f41.firebaseapp.com",
  projectId: "lostandfound-52f41",
  storageBucket: "lostandfound-52f41.appspot.com",
  messagingSenderId: "768566881197",
  appId: "1:768566881197:web:0c7efa973ce67d0bc30f24"
};

export const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
export const db = getDatabase(app);
export const createUser = createUserWithEmailAndPassword;
export const signInUser = signInWithEmailAndPassword;
export const updateUserProfile = updateProfile;
export const userSignOut = signOut;

export const storage = getStorage(app);
export const database = getDatabase(app);