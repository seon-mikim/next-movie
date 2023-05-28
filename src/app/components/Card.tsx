import Image from "next/image";
import { Result } from "./Results";
import {FiThumbsUp} from'react-icons/fi'
import Link from "next/link";

interface CardProps {
 key: number
 result: Result
}

export default function Card({key, result}: CardProps) {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-[2px] sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group' key={key}>
      <Link href={`/movie/${result.id}`}>
          <Image src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`} 
            alt='poster_img' placeholder='blur' blurDataURL="/spinner.svg" width={500} height={300}
            className='sm:rounded-t-[2px] group-hover:opacity-75 transition-opacity duration-200'
            style={{maxWidth:"100%", height:"auto"}}
            />
        <div className='p-2'>
          <h2 className='truncate text-lg font-bold text-neutral-600'>{result.title || result.original_title}</h2>
          <p className='flex items-center  text-xs text-neutral-400'>{result.release_date} 
            <FiThumbsUp className='h-5 mr-1 ml-3'/> {result.vote_count}
          </p>
          <p className='line-clamp-2 text-sm text-neutral-500'>{result.overview}</p>
        </div>
      </Link>
    </div>
  )
}
