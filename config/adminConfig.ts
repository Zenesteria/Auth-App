import { initializeApp} from "firebase-admin/app";
import { credential } from "firebase-admin";
import {getAuth} from 'firebase-admin/auth'
import * as firebase from 'firebase-admin'

const serviceCredentials = require('./serviceAccountKey.json');



// export const admin = initializeApp({
//     credential: credential.cert(serviceCredentials)
// });

const adminConfigOpts = {
    credential:credential.cert(serviceCredentials)
}

const admin = !firebase.apps.length ? initializeApp(adminConfigOpts, 'admin') : firebase.app('admin')

export const adminAuth = getAuth(admin);

