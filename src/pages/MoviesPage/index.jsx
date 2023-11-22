import React, { useEffect, useState } from "react";
import "./index.css";
import Carousel from "../../components/Carousel";
import Navbar from "../../components/Navbar";
import { fetchData } from "../../helpers/genres";

const MoviesPage = () => {
  const [genreData, setGenreData] = useState([]);
  useEffect(() => {
    const getGenre = async () => {
      await setGenreData(fetchData());
    };
    getGenre();
    console.log(genreData);
  }, []);
  return (
    <div className="container">
      <Navbar />

      <div className="primary-title text-white">Movies</div>
      <div className="movies-sub text-white">
        Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between.
        So many titles, so much to experience.
      </div>
      {/* <Carousel genreTitle={genreData} /> */}
    </div>
  );
};

export default MoviesPage;
