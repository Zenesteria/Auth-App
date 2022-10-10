/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    NEXT_API_KEY: process.env.FIREBASE_APP_API_KEY,
    NEXT_AUTH_DOMAIN: process.env.FIREBASE_APP_AUTH_DOMAIN,
    NEXT_PROJECT_ID: process.env.FIREBASE_APP_PROJECT_ID,
    NEXT_STORAGE_BUCKET: process.env.FIREBASE_APP_STORAGE_BUCKET,
    NEXT_MESSAGING_SENDER_ID: process.env.FIREBASE_APP_MESSAGING_SENDER_ID,
    NEXT_APP_ID: process.env.FIREBASE_APP_ID,
    NEXT_TYPE:process.env.TYPE,
    NEXT_PRIVATE_KEY_ID:process.env.PRIVATE_KEY_ID,
    NEXT_PRIVATE_KEY:process.env.PRIVATE_KEY,
    NEXT_CLIENT_EMAIL:process.env.CLIENT_EMAIL,
    NEXT_CLIENT_ID:process.env.CLIENT_ID,
    NEXT_AUTH_URL:process.env.AUTH_URL,
    NEXT_TOKEN_URL:process.env.TOKEN_URL,
    NEXT_AUTH_PROVIDER:process.env.AUTH_PROVIDER,
    NEXT_CLIENT_CERT:process.env.CLIENT_CERT
  }
}

module.exports = nextConfig
