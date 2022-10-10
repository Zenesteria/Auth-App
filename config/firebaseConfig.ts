import * as firebase from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_API_KEY,
  authDomain: process.env.NEXT_AUTH_DOMAIN,
  projectId: process.env.NEXT_PROJECT_ID,
  storageBucket: process.env.NEXT_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_ID
};

console.log(firebaseConfig)

// Initialize Firebase
export const app = !firebase.getApps().length ? firebase.initializeApp(firebaseConfig, 'app') : firebase.getApp('app');

export const database = getFirestore(app);