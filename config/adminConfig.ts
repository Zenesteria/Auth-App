import { applicationDefault, initializeApp} from "firebase-admin/app";
import {getAuth} from 'firebase-admin/auth'
import * as firebase from 'firebase-admin'



const admin = !firebase.apps.length ? initializeApp() : firebase.app()
export const adminAuth = getAuth(admin);

