import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6eSUWkXowCJ8Nq_EeQqGIRfHrqy2ktbQ",
  authDomain: "journal-app-react-d7230.firebaseapp.com",
  projectId: "journal-app-react-d7230",
  storageBucket: "journal-app-react-d7230.appspot.com",
  messagingSenderId: "180957386021",
  appId: "1:180957386021:web:740d3ef00092423b0c36cc",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
