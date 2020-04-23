import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdQ3tYuW5ROf4RJEKb6mTItFamH68mtcw",
  authDomain: "fir-login-fb961.firebaseapp.com",
  databaseURL: "https://fir-login-fb961.firebaseio.com",
  projectId: "fir-login-fb961",
  storageBucket: "fir-login-fb961.appspot.com",
  messagingSenderId: "575074659606",
  appId: "1:575074659606:web:775ea4ef477c9c3677b437",
  measurementId: "G-5WCF02BYX0",
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
