import React from 'react'
import MovieCard from '../MovieCard'
import './index.css'

const Carousel = () => {
  const handleScroll=()=>{

  }

  const handleLeftClick=()=>{
    
    scroll(-1200)
   
  }
  const handleRightClick=()=>{
    scroll(1200)


  }
  const scroll=(value)=>{
    document.getElementById('carousel').scrollBy({
      top: 0, 
      left:value, 
      behavior: 'smooth'
    })  

  }

  
  

  return (
    <div className='d-flex align-items-center' >
      <div className='icon text-white' onClick={()=>{handleLeftClick()}}>
        <div className="left-icon"></div>
      </div>
      <div className="carousel-container d-flex row gap" id='carousel' onScroll={()=>{handleScroll()}}>
        {
          [1,2,3,4,5,6,7,8,9,10,2,2,2,2,2].map((element,index)=>{

            return  <MovieCard text={element} key={index} />
          })
        }
        </div>
        <div className='icon text-white' onClick={()=>{handleRightClick()}}>
          <div className="right-icon" ></div>

        </div>

    </div>
  )
}

export default Carousel