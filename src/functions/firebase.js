import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth"; // modules for user signin and stuff
import { getFirestore } from "firebase/firestore";  // module for database

const firebaseConfig = {
  apiKey: "AIzaSyCVWFUdwr7ILf5LWmQZDT_5bUr1lAUi-ks",
  authDomain: "fir-database-6f019.firebaseapp.com",
  projectId: "fir-database-6f019",
  storageBucket: "fir-database-6f019.appspot.com",
  messagingSenderId: "157539538992",
  appId: "1:157539538992:web:1b7b526731f0616a8cb5f5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)  // for normal email sign in sign up method
export const googleProvider = new GoogleAuthProvider(); // for the google sign in
export const db = getFirestore(app); // for database stuff