import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import DashboardInstance from '../components/DashboardInstance';
import Redirect from '../components/Redirect';

export default function Dashboard() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false)
    const [data, setData] = useState('');

    const router = useRouter();

    useEffect(() => {

        const token = sessionStorage.getItem('Auth Token');
        setIsLoaded(true)
        // console.log(token);
        if(!authenticated){
          fetch('/api/authenticate',{
            body:JSON.stringify({
              token
            }),
            headers:{
              'Content-type':'application/json'
            },
            method:'POST'
          }).then(async (response) => {
            response.json()
            .then((res) => {
                if(!res.error){
                  console.log('success')
                  sessionStorage.setItem('uid', res.uid)
                  setAuthenticated(true);
                  return
                }
                console.log('error')
                setIsLoggedIn(false)
            })
          })
        }

        // return () => {
        //   setIsLoaded(true);
        // }

        // else if(!token){
        //   setTimeout(() => {
        //     router.push('/login');
        //   }, 5000);
        // }
        
    },[isLoggedIn,data, authenticated, router])
  return (
    <div>
        {isLoggedIn && authenticated && <DashboardInstance/>}
        {isLoaded && !isLoggedIn && <Redirect msg='NOT LOGGED IN PLEASE LOG IN' to='/login' duration={5}/>}
    </div>
  )
}
