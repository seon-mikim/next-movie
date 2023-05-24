'use client'
import {useEffect, useState} from 'react'
import { MdLightMode } from 'react-icons/md'
import { MdNightlight } from 'react-icons/md'
import { useTheme } from 'next-themes'

export default function DarkModeSwitch() {
  const {systemTheme,theme, setTheme} = useTheme()
  const [mounted, setMounted]= useState<boolean>(false)
  useEffect(()=> setMounted(true),[])
  const currentTheme = theme === 'system' ? systemTheme: theme
  
  return (
    <>
    {mounted&&currentTheme === 'dark'?<MdLightMode className='text-xl cursor-pointer hover:text-cyan-600' onClick={()=>setTheme('light')}/>:
    <MdNightlight className='text-xl cursor-pointer hover:text-cyan-600'onClick={()=> setTheme('dark')}/>
    }
    </>
  )
}
