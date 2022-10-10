import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import Logo from '../components/Logo'

import {app, database} from '../config/firebaseConfig'

import {collection, addDoc} from 'firebase/firestore'

import { useRouter } from 'next/router'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Login() {
    const router = useRouter();
    const [loggedIn, setLoggedIn] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState({
        err:false,
        msg:''
    })

    


    const handleSubmit = async(e:any) => {
        e.preventDefault();
        
        const auth = getAuth(app)
        
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            // Create a Doc for User
            // collection ref
            const collectionRef = collection(database, 'users')

            await addDoc(collectionRef, {
                uid:res.user.uid,
                name
            })

            // Update User Name
            const userupdate = await fetch('/api/updateuser', {
                body:JSON.stringify({uid:res.user.uid, name}),
                headers:{
                    'Content-type':'application/json'
                },
                method:'POST'
            });


            const token = await res.user.getIdToken();

            sessionStorage.setItem('Auth Token', token);

            setMsg({
                err:false,
                msg:'registered successfully!'
            })

            setTimeout(() => {
                router.push('/dashboard');
            }, 1000);

        } catch (error:any) {
            setMsg({
                err:true,
                msg:error.errorcode
            })
        }


    }


    useEffect(() => {
        const token = sessionStorage.getItem('Auth Token')
        if(token){
            setLoggedIn(true);
            router.push('/dashboard')
        }

    },[router])
    return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-blue-300 text-black'>
        <Logo/>
        <div className="w-[30%] h-fit bg-white min-w-[330px] border shadow-xl rounded-lg p-10">
            <h1 className='w-full font-bold mb-3 text-center tracking-wide' style={{fontSize:'calc(0.8rem + 0.5vw)'}}>
                Register Account
            </h1>
            <form onSubmit={handleSubmit} className='flex flex-col w-full h-fit'>
                <input type="text" value={name} className='w-full bg-transparent outline-none focus:outline-none border-b py-2 my-5' required placeholder='Full Name'
                    onChange={(e) => {setName(e.target.value)}}
                />
                <input type="text" value={email} className='w-full bg-transparent outline-none focus:outline-none border-b py-2 my-5' required placeholder='Email'
                    onChange={(e) => {setEmail(e.target.value)}}
                />

                <input type="text" value={password} className='w-full bg-transparent outline-none focus:outline-none border-b py-2 my-5' required placeholder='Password' 
                    onChange={(e) => {setPassword(e.target.value)}}
                />
                {msg && <p style={msg.err ? {color:'red'}:{color:'green'}}>
                    {msg.msg}
                </p>}
                <button type='submit' className='w-full rounded-lg p-2 font-semibold tracking-widest text-white bg-blue-800 my-5' style={{fontSize:'calc(0.6rem + 0.5vw)'}}>
                    Register
                </button>
            </form>

            <p className='w-full text-center'>
                Already have an account? <Link href={'/login'} passHref><span className='text-blue-500 underline tracking-wide cursor-pointer' style={{fontSize:'calc(0.5rem + 0.5vw)'}}>Login</span></Link>
            </p>
        </div>
    </div>
  )
}
