import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

interface RedirectProps{
    to:string,
    msg:string,
    duration:number
}

export default function Redirect({to, msg, duration}:RedirectProps) {
    const router = useRouter();
    const [seconds, setSeconds] = useState(duration);

    useEffect(() => {
        let interval:any = null;
        if(seconds > 0){
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1)
                console.log(seconds)
            }, 1000)
        }else{
            clearInterval(interval)
            router.push(to)
        }
        return () => {
            clearInterval(interval)
        }
    },[router, seconds, to])
  return (
    <div>
        {`${msg}. . . ${seconds}`}
    </div>
  )
}
