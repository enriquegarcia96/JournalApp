import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD7RpkYwuhQ-Wl83ngZqhIfWgqYFBVppPo",
  authDomain: "react-app-journal-b94b2.firebaseapp.com",
  projectId: "react-app-journal-b94b2",
  storageBucket: "react-app-journal-b94b2.appspot.com",
  messagingSenderId: "1061174489180",
  appId: "1:1061174489180:web:229be471f26be83450f699",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
