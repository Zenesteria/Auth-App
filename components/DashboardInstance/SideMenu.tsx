
import React from 'react'
import Profile from './Profile'
import SignOut from './SignOut'



export default function SideMenu() {
  return (
    <div 
    data-aos='fade-up'
    className='flex flex-col items-center w-[300px] h-full rounded-2xl shadow-2xl bg-white py-7 px-4'>
        <Profile/>

        <SignOut/>
    </div>
  )
}
