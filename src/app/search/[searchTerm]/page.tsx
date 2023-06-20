import React from 'react'
import Results from '@/app/components/Results'
interface SearchParamsProps {
    params:{
        searchTerm:string
    } 
}

export default async function SearchPage({params}:SearchParamsProps) {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`)
  if(!response.ok) {
    throw new Error('Error fetching data')
  }
    const data = await response.json()
    const results = data.results
    return (
    <div>
      {results && results.length ===  0 && (
      <h1 className='text-center pt-6'>No results 
      found</h1>
      )}
      {results && <Results results={results}/>}
      </div>
  )
}
