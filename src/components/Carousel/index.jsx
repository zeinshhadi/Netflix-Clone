import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import "./index.css";

const Carousel = ({ genreTitle }) => {
  const [scrollLeftValue, setscrollLeftValue] = useState(0);

  const handleLeftClick = () => {
    setscrollLeftValue(-1200);
    scroll(scrollLeftValue);
  };
  const handleRightClick = () => {
    setscrollLeftValue(1200);
    scroll(scrollLeftValue);
  };
  const scroll = (value) => {
    document.getElementById("carousel").scrollBy({
      left: value,
      behavior: "smooth",
    });
    // console.log(document.getElementById("carousel").scrollLeft);
  };
  const [movieData, setMovieData] = useState([]);

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
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          setMovieData(response.results);
          return response;
        })
        .catch((err) => console.error(err));
      return response;
    };

    fetchData();
  }, []);
  console.log(movieData);
  return (
    <div className="d-flex align-items-center">
      <div
        className={`icon text-white`}
        onClick={() => {
          handleLeftClick();
        }}>
        <div className={`left-icon ${scrollLeftValue <= 0 ? "d-none" : "d-block"}`}></div>
      </div>
      {/* <div> */}
      {/* <div className="text-white">{genreTitle}</div> */}
      <div className="carousel-container d-flex row gap" id="carousel">
        {movieData.map((element, index) => {
          return <MovieCard element={element} key={index} />;
        })}
      </div>
      {/* </div> */}

      <div
        className="icon text-white"
        onClick={() => {
          handleRightClick();
        }}>
        <div className="right-icon"></div>
      </div>
    </div>
  );
};

export default Carousel;
