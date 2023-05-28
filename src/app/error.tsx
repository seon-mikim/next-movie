'use client'
import { useEffect } from 'react'

export default function Error({error, resest}) {
    useEffect(()=>{
        console.log(error)
    }, [error])
  return (
    <div className='text-center mt-10'>
        <h1>Some went wrong</h1>
        <button className='hover: text-cyan-600'onClick={()=>resest()}> Try Agin</button>
    </div>
    )}