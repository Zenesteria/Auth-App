import React from 'react'
import SideMenu from './SideMenu'

export default function DashboardInstance() {
  return (
    <div className='relative flex h-screen p-7'>
      <div className="absolute top-0 right-0 w-full h-[15vh] z-[-1] bg-center bg-cover bg-no-repeat" style={{backgroundImage:"url('/img/bannerbg.jpg')"}}></div>
      <SideMenu/>
    </div>
  )
}
