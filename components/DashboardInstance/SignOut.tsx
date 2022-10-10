import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
import React from 'react'
import {FaSignOutAlt} from 'react-icons/fa'
import { app } from '../../config/firebaseConfig'

export default function SignOut() {
  const router = useRouter();
  const handleClick = async () => {
      const auth = getAuth(app)
      try {
        const signOutResponse = await signOut(auth)
        console.log(signOutResponse)
        sessionStorage.removeItem('Auth Token')
        sessionStorage.removeItem('uid')
        router.push('/login')
      } catch (error) {
        console.log(error)
      }


  }
  return (
    <div onClick={handleClick} className='flex items-center mt-auto cursor-pointer group'>
        <FaSignOutAlt className='mr-3'/>
        <p className='font-light group-hover:tracking-wider duration-300' style={{fontSize:'calc(0.6rem + 0.35vw)'}}>Sign Out</p>
    </div>
  )
}
