import React, { useEffect, useState } from "react";
import "./index.css";
import Carousel from "../../components/Carousel";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { fetchData } from "../../helpers/genres";

const MoviesPage = () => {
  const [genreData, setGenreData] = useState([]);

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
      const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
        .then((response) => response.json())
        .then((response) => {
          setGenreData(response.genres);
          return response;
        })
        .catch((err) => console.error(err));
      return response;
    };

    fetchData();
  }, []);

  console.log(genreData);
  return (
    <div className="container">
      <Navbar />

      <div className="primary-title text-white">Movies</div>
      <div className="movies-sub text-white">
        Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between.
        So many titles, so much to experience.
      </div>

      <div className="container">
        {genreData.map((genre) => {
          return (
            <div>
              {/* <div className="text-white">{genre.name}</div> */}

              <Carousel genreID={genre.id} genreTitle={genre.name} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default MoviesPage;
