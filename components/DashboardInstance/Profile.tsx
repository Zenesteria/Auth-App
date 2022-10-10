import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Profile() {
    const [user, setUser] = useState(
        {
            uid:'',
            name:''
        }
    )
    const [fetched, setFetched] = useState(false)

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        const uid = sessionStorage.getItem('uid')


        if(!fetched){
            fetch('/api/user', {
                body:JSON.stringify({uid}),
                headers:{
                    'Content-type':'application/json'
                },
                method:'POST'
            }).then((response) => {
                response.json()
                .then(userRecord => {
                    setUser({
                        uid:userRecord.uid,
                        name:userRecord.displayName.split(' ')[0]
                    })
                })
                // console.log(response)
                // setUser({data:response})
            })
        }

        return () => {
            // controller.abort();
            setFetched(true)
        }
    })
  return (
    <div className='flex flex-col items-center justify-center w-full'>
        <div className="relative w-[40%] aspect-square drop-shadow-lg">
            <Image
              src={'/img/pfp.png'}
              layout='fill'
              alt='pfp'
            />
        </div>
        <h1 className='mt-3 font-semibold' style={{fontSize:'calc(0.6rem + 0.35vw)'}}>
            {`Welcome ${user.name}`}
        </h1>
        <h3 className='font-extralight text-gray-600 w-full text-center my-2' style={{fontSize:'calc(0.5rem + 0.25vw)'}}>
            uid: <strong>{`${user.uid}`}</strong>
        </h3>
    </div>
  )
}
