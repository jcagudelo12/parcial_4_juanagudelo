import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC83Q0TSiSt7wtDRih8iqEO8BuRULdOibw",
  authDomain: "parcial-4-juanagudelo.firebaseapp.com",
  projectId: "parcial-4-juanagudelo",
  storageBucket: "parcial-4-juanagudelo.appspot.com",
  messagingSenderId: "874135949447",
  appId: "1:874135949447:web:13aa84259849f7f8a12822",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
