"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function Providers({children}: {children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
        <div className='dark:bg-neutral-800 bg-opacity-20 dark:text-neutral-200 text-neutral-800 transition-colors duration-300 min-h-screen select-none'>
        {children}
        </div>
    </ThemeProvider>
  )
}
