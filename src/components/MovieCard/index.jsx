import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
 import movieImg from "./../../images/movie.jpg"
const MovieCard = ({img}) => {
  return (
    <div className='movie-card '>
        {/* <Link  ref='/'> */}
            <div >
            <div className='movie-img-wrapper'>
                <img src={img?img:movieImg} alt="" />
            </div>
            <div className="movie-title text-white text-center">
                Hello
            </div>
            </div>   

        {/* </Link> */}

    </div>
  )
}

export default MovieCard