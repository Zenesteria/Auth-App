import React, { useState, useEffect } from 'react'

import {getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {app} from '../config/firebaseConfig'

import Logo from '../components/Logo'
import Link from 'next/link';

import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        const auth = getAuth(app);

        try {
            const res = await signInWithEmailAndPassword(auth, email, password)
            const token = await res.user.getIdToken()
            sessionStorage.setItem('Auth Token', token)
            router.push('/dashboard')
        } catch (error) {
            console.log(error);
        }


    }
    useEffect(() => {
        const token = sessionStorage.getItem('Auth Token')
        if(token){
            router.push('/dashboard')
        }

    },[router])
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-blue-300 text-black'>
        <Logo/>
        <div className="w-[30%] h-fit bg-white border min-w-[330px] shadow-xl rounded-lg p-10">
            <h1 className='w-full font-bold mb-3 text-center tracking-wide' style={{fontSize:'calc(0.8rem + 0.5vw)'}}>
                Login to Account
            </h1>
            <form onSubmit={handleSubmit} className='flex flex-col w-full h-fit'>
                <input type="text" value={email} className='w-full bg-transparent outline-none focus:outline-none border-b py-2 my-5' placeholder='Email' 
                onChange={(e:any) => {setEmail(e.target.value)}} />

                <input type="text" value={password} className='w-full bg-transparent outline-none focus:outline-none border-b py-2 my-5' placeholder='Password' 
                onChange={(e:any) => {setPassword(e.target.value)}}/>

                <button type='submit' className='w-full rounded-lg p-2 font-semibold tracking-widest text-white bg-blue-800 my-5 hover:bg-blue-900 duration-300' style={{fontSize:'calc(0.6rem + 0.5vw)'}}>
                    Login
                </button>
            </form>
            <p className='w-full text-center'>
                {"Don't have an account?"} <Link href={'/register'} passHref><span className='text-blue-500 underline tracking-wide cursor-pointer' style={{fontSize:'calc(0.5rem + 0.5vw)'}}>Register</span></Link>
            </p>
        </div>
    </div>
  )
}
