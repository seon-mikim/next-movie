import Results from "./components/Results"

const API_KEY = process.env.API_KEY

interface searchParamsProps {
  searchParams: {
    genre:string
  }
}

export default async function Home({searchParams}:searchParamsProps) {
  const genre = searchParams.genre || "fetchTrending"

  const response = await fetch(`https://api.themoviedb.org/3/${genre === "fetchTopRated"?"movie/top_rated":"trending/all/week"}?api_key=${API_KEY}&language=en_US&page=1`,{next: { revalidate: 10000 } } )
  
  const data = await response.json()
  const results = data.results
  
  if(!response.ok) {
    throw new Error ("Failed to fetch data")
  }
  return (
  <div><Results results={results}/></div>
  )
}
