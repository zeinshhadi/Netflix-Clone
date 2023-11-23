import React, { useEffect, useState } from "react";
import "./index.css";
import Button from "../../components/Button";
import { useParams } from "react-router-dom";
import nlogo from "../../images/n-logo.png";
import MovieCard from './../../components/MovieCard'
import MoreLikeThisCard from "../../components/MoreLikeThisCard";
import ComingSoon from "../../components/ComingSoon";
const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [moreLikeThis,setMoreLikeThis] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTRiNTU2MTJhMzRjYmFmYmE2NjI3YTUyYjJkYmMxNiIsInN1YiI6IjY1NTkxMWU4Y2EwZTE3MDBhZGJmYTM2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mqrJ1J4kH5A2pKOIT_mx7pGBxEMIjoW_7qDnn2Us1bw",
      },
    };


    const fetchMoreLikeThis=()=>{
      fetch(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => {
    console.log(response.results)
    setMoreLikeThis(response.results)
    return response.results;
  })
  .catch(err => console.error(err));
    }
    const fetchMovieData = async () => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then((response) => response.json())
        .then((response) => {
          setMovie(response);
          return response;
        })
        .catch((err) => console.error(err));
    };
    fetchMovieData();
    fetchMoreLikeThis();
  }, []);

 
  // console.log(movie);
  return (
    <>
      <div
        className="text-white bg-img d-flex center"
        style={{ backgroundImage: `linear-gradient(
          rgba(35, 35, 35, 0.85),
          rgba(35, 35, 35, 0.85)
        ),url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})` }}>
          
        <div className="container d-flex start column">
          <div className="logo-title">
            {/* <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /> */}
          </div>
          <div className="movie-title-d">{movie.original_title} </div>
          <div className="sub-movie-title-d">{movie.original_title} </div>
          <div className="movie-desc-d">{movie.overview}</div>
        </div>
      </div>
      <div className="container d-flex space-between align-items-center under-hero">
        <div className="left-side d-flex start start-center">
          <div className="logo-img">
            <img src={nlogo} alt="" />
          </div>
          <div className="logo-txt text-white ">Watch all you want.</div>
        </div>
        <div className="right-side">
          <Button text="JOIN NOW" />
        </div>
      </div>
      <div className="container">
      <MoreLikeThisCard moreLikeThis={moreLikeThis}/>
      <ComingSoon />
      </div>

     
      
     
    </>
  );
};

export default MovieDetailsPage;
