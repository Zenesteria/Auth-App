import { initializeApp} from "firebase-admin/app";
import {getAuth} from 'firebase-admin/auth'
import * as firebase from 'firebase-admin'

import serviceCredentials from "./serviceCredentials";




const adminConfigOpts = {
    credential:firebase.credential.cert({
        projectId:process.env.NEXT_PROJECT_ID,
        clientEmail:process.env.NEXT_CLIENT_EMAIL,
        privateKey:process.env.NEXT_PRIVATE_KEY?.replace(/\\n/g, '\n')
    })
}

console.log(adminConfigOpts)

const admin = !firebase.apps.length ? initializeApp(adminConfigOpts) : firebase.app()

export const adminAuth = getAuth(admin);

