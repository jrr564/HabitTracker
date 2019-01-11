import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCMHaA2mPVZQW-lcwxZGkvroIhj2vwNWtI",
  authDomain: "habitapp-b2ff8.firebaseapp.com",
  databaseURL: "https://habitapp-b2ff8.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
