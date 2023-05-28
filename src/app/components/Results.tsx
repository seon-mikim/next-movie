import React from 'react'
import Card from './Card'
export interface Result {
    id: number
    original_title: string
    original_language: string
    name: string
    backdrop_path: string
    overview: string
    genre_ids:number[]
    title: string 
    poster_path: string
    release_date: number
    popularity: number
    vote_average: number
    vote_count: number
}

export interface Results {
    results:Result[]
}
export default function Results({results}:Results) {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
        {results.map((result) => (
        <Card key={result.id} result={result} />
        ))}
    </div>
  )
}

