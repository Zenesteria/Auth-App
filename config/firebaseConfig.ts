import * as firebase from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBCvCG0PhdiCD5EkEb-gP7p6GYAM4hqB5A",
  authDomain: "fir-frontend-90feb.firebaseapp.com",
  projectId: "fir-frontend-90feb",
  storageBucket: "fir-frontend-90feb.appspot.com",
  messagingSenderId: "600937844084",
  appId: "1:600937844084:web:c62f01b9a4bbd4c064b021"
};

// Initialize Firebase
export const app = !firebase.getApps().length ? firebase.initializeApp(firebaseConfig, 'app') : firebase.getApp('app');

export const database = getFirestore(app);