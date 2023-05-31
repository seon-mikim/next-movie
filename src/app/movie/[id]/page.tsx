import Image from 'next/image'
import React from 'react'

interface MovieParams {
    params: {
        id: number
    }
}

async function getMovie(movieId:number) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
    return await response.json()
}

export default async function  Movie({params}:MovieParams) {
    const movieId = params.id
    const movie = await getMovie(movieId)
  
   
  return (
    <div className='w-full'>
        <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
        <Image src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`} 
            alt={`${movie.original_title}_poster_img`} placeholder='blur' blurDataURL="/spinner.svg" width={600} height={500}
            className='rounded-[4px]'
            style={{maxWidth:"100%", height:"100%"}}
            />
            <div className='p-2'>
                <h2 className='text-lg mb-3 font-bold'>{movie.original_title}</h2>
                <p className='text-lg mb-3'>
                    <span className='font-semibold mr-1'>Overview:</span>
                {movie.overview}
                </p>
                <p className='mb-3'>
                    <span className='font-semibold mr-1'>Date Released</span>
                    {movie.release_date}
                </p>
                <p className="mr-3">
                    <span className='font-semibold mr-1'>Rating:</span>
                    {movie.popularity}
                </p>
            </div>
        </div>
    </div>
  )
}
