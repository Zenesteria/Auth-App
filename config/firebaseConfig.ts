import * as firebase from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APP_API_KEY,
  authDomain: process.env.FIREBASE_APP_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_APP_PROJECT_ID,
  storageBucket: process.env.FIREBASE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_APP_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};
console.log(firebaseConfig)

// Initialize Firebase
export const app = !firebase.getApps().length ? firebase.initializeApp(firebaseConfig, 'app') : firebase.getApp('app');

export const database = getFirestore(app);