import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhAgkf7I9Ytufe1KUiy7vdYkOou9UCsZg",
  authDomain: "clone-4f722.firebaseapp.com",
  projectId: "clone-4f722",
  storageBucket: "clone-4f722.appspot.com",
  messagingSenderId: "288519346415",
  appId: "1:288519346415:web:ed9632dcf860d6e38f231a",
  measurementId: "G-H9B40DXNCG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }