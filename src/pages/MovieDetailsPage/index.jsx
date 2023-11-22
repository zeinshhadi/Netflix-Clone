import React, { useEffect, useState } from "react";
import "./index.css";
import Button from "../../components/Button";
import { useParams } from "react-router-dom";
import nlogo from "../../images/n-logo.png";
const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
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
      fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then((response) => response.json())
        .then((response) => {
          setMovie(response);
          return response;
        })
        .catch((err) => console.error(err));
    };
    fetchData();
  }, []);
  console.log(movie);
  return (
    <>
      <div
        className="text-white bg-img d-flex center"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})` }}>
        <div className="container d-flex start column">
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
    </>
  );
};

export default MovieDetailsPage;
