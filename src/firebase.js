import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCnyt5JGbQEyF0aX8Ho88UUppZgKmzgEaM",
  authDomain: "unitter-chat.firebaseapp.com",
  projectId: "unitter-chat",
  storageBucket: "unitter-chat.appspot.com",
  messagingSenderId: "463686958832",
  appId: "1:463686958832:web:3b742e9ab0bc5c8f664c35",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
