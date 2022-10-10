import { initializeApp} from "firebase-admin/app";
import { credential } from "firebase-admin";
import {getAuth} from 'firebase-admin/auth'
import * as firebase from 'firebase-admin'

const serviceCredentials = process.env.NODE_ENV == 'production' ? JSON.stringify({
        type:process.env.NEXT_TYPE,
        project_id:process.env.NEXT_PROJECT_ID,
        private_key_id:process.env.NEXT_PRIVATE_KEY_ID,
        private_key:process.env.NEXT_PRIVATE_KEY,
        client_email:process.env.NEXT_CLIENT_EMAIL,
        client_id:process.env.NEXT_CLIENT_ID,
        auth_url:process.env.NEXT_AUTH_URL,
        token_url:process.env.NEXT_TOKEN_URL,
        auth_provider_x509_cert_url:process.env.NEXT_AUTH_PROVIDER,
        client_x509_cert_url:process.env.NEXT_CLIENT_CERT
}) : require('../serviceAccountKey.json')


const adminConfigOpts = {
    credential:serviceCredentials
}

const admin = !firebase.apps.length ? initializeApp(adminConfigOpts, 'admin') : firebase.app('admin')

export const adminAuth = getAuth(admin);

