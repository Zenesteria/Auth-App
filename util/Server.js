const Server = process.env.NODE_ENV == 'production' ? 'https://zenauthapp.vercel.app' : 'http://localhost:3000'

export default Server