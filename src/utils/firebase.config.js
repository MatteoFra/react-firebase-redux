import firebase from "firebase/compat/app"
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-redux-8ee4c.firebaseapp.com",
  projectId: "react-firebase-redux-8ee4c",
  storageBucket: "react-firebase-redux-8ee4c.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGESENDERID,
  appId: process.env.REACT_APP_APPID
});

export const auth = app.auth();
export default app;