// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU7bwU27f6-LNRdUGiW6sNyYA17U4doMU",
  authDomain: "project-366ff.firebaseapp.com",
  projectId: "project-366ff",
  storageBucket: "project-366ff.appspot.com",
  messagingSenderId: "425856061202",
  appId: "1:425856061202:web:f92e1c4c1406b59daaedcb",
  measurementId: "G-MCSH3D3G80",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth= firebase.auth();
const db = app.firestore()

export {auth, db};
