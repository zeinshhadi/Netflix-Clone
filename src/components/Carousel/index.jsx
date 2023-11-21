import React from 'react'
import MovieCard from '../MovieCard'
import './index.css'

const Carousel = () => {
  const handleScroll=()=>{

  }

  return (
    <div className='d-flex align-items-center'>
      <div className='left-icon text-white'>L</div>
      <div className="carousel-container d-flex row gap" onScroll={()=>{handleScroll()}}>
        {
          [1,2,3,4,5,6,7,8,9,10,2,2,2,2,2].map((element)=>{

            return  <MovieCard />
          })
        }
        </div>
        <div className='right-icon text-white'>R</div>

    </div>
  )
}

export default Carousel