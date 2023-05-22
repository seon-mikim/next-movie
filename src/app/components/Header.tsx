import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {AiFillInfoCircle} from 'react-icons/ai'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
        <div className='flex'>
            <MenuItem title='HOME' address='/' Icon={AiFillHome}/>
            <MenuItem title='ABOUT' address='/about' Icon={AiFillInfoCircle}/>
        </div>
        <div className=''>
            <Link href='/'><h2 className='text-2xl'><span className='font-bold bg-cyan-600 py-1 px-2 rounded-[2px] text-white mr-1'>NEXT MOVIE</span><span className='text-sm hidden sm:inline ml-1'>IMDb Clone</span></h2></Link>
        </div>
    </div>
  )
}
