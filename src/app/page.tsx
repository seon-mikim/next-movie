const API_KEY = process.env.API_KEY

interface searchParamsProps {
  searchParams: {
    genre:string
  }
}


export default async function Home({searchParams}:searchParamsProps) {
  const genre = searchParams.genre || "fetchTrending"

  const response = await fetch(`https://api.themoviedb.org/3/
  ${genre === "fetchTopRated"?"movie/top_rated":"trending/all/week"}
  ?api_key=${API_KEY}&language=en_US&page=1`)
  
  return (
    <div className='max-w-6xl mx-auto space-x-4'>
      <h1 className='text-2xl font-medium text-cyan-600'>HOME</h1> 
    </div>
  )
}
