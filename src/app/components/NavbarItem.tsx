'use client'

import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface NavbarItemProps {
    title:string
    param: string
}
export default function NavbarItem({title, param}:NavbarItemProps) {
  const searchParams = useSearchParams()
  const genre = searchParams.get('genre')
  return (
    <div>
        <Link className={`m-4 hover:text-cyan-600 font-semibold p-2 ${genre&&genre === param&& 'underline underline-offset-8 decoration-4 decoration-cyan-500 rounded-lg' }`} href={`/?genre=${param}`}>
        {title}
          </Link>
    </div>
  )
}
