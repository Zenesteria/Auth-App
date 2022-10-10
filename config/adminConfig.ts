import { initializeApp} from "firebase-admin/app";
import { credential } from "firebase-admin";
import {getAuth} from 'firebase-admin/auth'
import * as firebase from 'firebase-admin'

const serviceCredentials = JSON.stringify({
    type:process.env.TYPE,
    project_id:process.env.FIREBASE_APP_PROJECT_ID,
    private_key_id:process.env.PRIVATE_KEY,
    client_email:process.env.CLIENT_EMAIL,
    client_id:process.env.CLIENT_ID,
    auth_url:process.env.AUTH_URL,
    token_url:process.env.TOKEN_URL,
    auth_provider_x509_cert_url:process.env.AUTH_PROVIDER,
    client_x509_cert_url:process.env.CLIENT_CERT
}) || require('../serviceAccountKey.json');


const adminConfigOpts = {
    credential:credential.cert(serviceCredentials)
}

const admin = !firebase.apps.length ? initializeApp(adminConfigOpts, 'admin') : firebase.app('admin')

export const adminAuth = getAuth(admin);

