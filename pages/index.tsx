import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Auth app using firebase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-blue-300">
          <h1 className=''>
            Auth Starter App
          </h1>
          <div 
          data-aos='fade-up'
          className="flex flex-wrap h-fit w-fit">
            <Link href={'/register'} passHref>
              <p 
              className='min-w-[120px] py-4 px-7 text-center rounded-full m-5 w-fit bg-blue-700 text-white cursor-pointer hover:bg-blue-900 duration-300'>Register</p>
            </Link>
            <Link href={'/login'} passHref>
              <p 
              className='min-w-[120px] py-4 px-7 text-center rounded-full m-5 w-fit bg-blue-700 text-white cursor-pointer hover:bg-blue-900 duration-300'>Login</p>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Home
