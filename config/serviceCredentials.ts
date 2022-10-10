const serviceCredentials = JSON.stringify({
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
})

export default serviceCredentials