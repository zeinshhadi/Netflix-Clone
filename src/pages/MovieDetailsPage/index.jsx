import React, { useEffect, useState } from "react";
import "./index.css";
import Carousel from "../../components/Carousel";
import { useParams } from "react-router-dom";

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
    <div
      className="text-white bg-img"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})` }}>
      {movie.original_title}
      {/* <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" /> */}
    </div>
  );
};

export default MovieDetailsPage;
