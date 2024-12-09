import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqBUpJCl4CwUm8PVcWwVWGSpLNTD-3QcM",
  authDomain: "notes-app-80ee6.firebaseapp.com",
  projectId: "notes-app-80ee6",
  storageBucket: "notes-app-80ee6.firebasestorage.app",
  messagingSenderId: "257574922247",
  appId: "1:257574922247:web:32f89e472b855c6d61e2a2",
  measurementId: "G-JY6KVRGTCC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword };
