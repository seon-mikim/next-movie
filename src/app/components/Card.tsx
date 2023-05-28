import { Result } from "./Results";

interface CardProps {
 key: number
 result: Result
}

export default function Card({key, result}: CardProps) {
  return (
    <div key={key}></div>
  )
}
