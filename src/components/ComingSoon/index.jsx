import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './index.css'
const ComingSoon = () => {

    const [soonMovies, setSoonMovies] = useState([]);
  
    useEffect(() => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTRiNTU2MTJhMzRjYmFmYmE2NjI3YTUyYjJkYmMxNiIsInN1YiI6IjY1NTkxMWU4Y2EwZTE3MDBhZGJmYTM2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mqrJ1J4kH5A2pKOIT_mx7pGBxEMIjoW_7qDnn2Us1bw",
        },
      };
  
  
    
      const fetchData = async () => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)

          .then((response) => response.json())
          .then((response) => {
            setSoonMovies(response.results);
            return response;
          })
          .catch((err) => console.error(err));
      };
      fetchData();
     
    }, []);

    console.log(soonMovies)
  return (
    <div className='comin-soon'>
        <div className='primary-title'>Coming Soon</div>

      <div className="d-flex wrap row">

        {soonMovies.map((movie)=>{
            return   <div className="d-flex column text-white w-300 coming-soon-container">
            <Link className='movie-title text-white' to='hello'>{movie.original_title}</Link>
            <div className="movie-decription">
               {movie.overview}
            </div>

        </div> 
        })}
      </div>

    </div>
  )
}

export default ComingSoon