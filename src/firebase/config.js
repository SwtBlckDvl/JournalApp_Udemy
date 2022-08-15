// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth;";
import { getFirestore } from "firebase/firestore/lite;";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLnddMhQy46ZcWPCzhf9QPOg5gUxawBo8",
  authDomain: "react-cursos-1952f.firebaseapp.com",
  projectId: "react-cursos-1952f",
  storageBucket: "react-cursos-1952f.appspot.com",
  messagingSenderId: "869456024114",
  appId: "1:869456024114:web:142373caa8932147a5e22b",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp); // Aqui vienen las funcionalidades de autenticacion.
export const FirebaseDB = getFirestore(FirebaseApp); // Config de base de datos.
