'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SearchBox() {
    const [search, setSearch] = useState('')
    const router = useRouter()
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        if(!search) return 
        
        router.push(`search/${search}`)
    }
  return (
    <form  onSubmit={handleSubmit} className="flex max-w-6xl mx-auto justify-between items-center px-5">
        <input onChange={(e)=> setSearch(e.target.value)}type="text" placeholder="Search keywords ..."  className="w-full h-14 rounded-sm placeholder-neutral-500  outline-none bg-transparent"/>
            <button disabled={!search} type="submit" className="text-cyan-600 disable:text-neutral-400">Search</button>
        </form>
  )
}
