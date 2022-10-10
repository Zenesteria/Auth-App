import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <div 
      className="relative w-[7%] aspect-[0.61/1] my-6 min-w-[70px]"
    >
        <Image
          layout='fill'
          src='/img/firebase.png'
          alt='firebase'
        />
    </div>
  )
}
