import React from 'react'

interface Result {
    id: number
    original_title: string
    original_language: string
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

interface Results {
    results:Result[]
}
export default function Results({results}:Results) {
  return (
    <div>
        {results.map((result) => (
        <div key={result.id}>{result.original_title}</div>
        ))}
    </div>
  )
}

