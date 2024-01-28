// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDilKipLjC5FRNKP0midMLlPzwgF20Da9E",
  authDomain: "expense-tracker-c9e7b.firebaseapp.com",
  projectId: "expense-tracker-c9e7b",
  storageBucket: "expense-tracker-c9e7b.appspot.com",
  messagingSenderId: "166940245379",
  appId: "1:166940245379:web:f49fead00f928169458ab6",
  measurementId: "G-CL5BNQHNDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider();
export const db = getFirestore(app);