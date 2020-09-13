import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBk0IOCiw-EaSffc2BX3Y2ZA0foLggOM1k",
  authDomain: "story-view-5b0f7.firebaseapp.com",
  databaseURL: "https://story-view-5b0f7.firebaseio.com",
  projectId: "story-view-5b0f7",
  storageBucket: "story-view-5b0f7.appspot.com",
  messagingSenderId: "426836814476",
  appId: "1:426836814476:web:7205e2fa2e595e7f4969a9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
