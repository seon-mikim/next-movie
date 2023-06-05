import React from 'react'
interface SearchParamsProps {
    searchParams:{
        searchTerm:string
    } 
}

export default async function SearPage({searchParams}:SearchParamsProps) {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchParams.searchTerm}&language=en-US&page=1&include_adult=false`)
  if(!response.ok) {
    throw new Error('Error fetching data')
  }

    return (
    <div>SearPage</div>
  )
}
