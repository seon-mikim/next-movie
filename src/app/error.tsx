'use client'
import { useEffect } from 'react'


export default function Error({error, reset}: {
    error: Error;
    reset: () => void;
  }) {
    useEffect(()=>{
        console.log(error)
    }, [error])
  return (
    <div className='text-center mt-10'>
        <h1>Some went wrong</h1>
        <button className='hover: text-cyan-600'onClick={()=>reset()}> Try Agin</button>
    </div>
    )}