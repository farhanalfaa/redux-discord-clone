import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKSur6yLsZg4Ciq-Rcoqj1qSEStvgY0YY",
  authDomain: "discord-clone-b354b.firebaseapp.com",
  databaseURL: "https://discord-clone-b354b.firebaseio.com",
  projectId: "discord-clone-b354b",
  storageBucket: "discord-clone-b354b.appspot.com",
  messagingSenderId: "211215606625",
  appId: "1:211215606625:web:8ba0e3f2beb11cc0f81b20",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
