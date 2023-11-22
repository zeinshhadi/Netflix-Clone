import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import movieImg from "./../../images/movie.jpg";
const MovieCard = ({ img, element,genreID }) => {

  // 
  return (<>{genreID==element.genre_ids[0]?(<div className="movie-card ">
    <Link  to={`/movieDetails/${element.id}`}>
    <div>
      <div className="movie-img-wrapper">
        <img src={`https://image.tmdb.org/t/p/w500${element.backdrop_path}`} alt="" />
      </div>
      <div className="movie-title text-white text-center">{element.original_title}</div>
    </div>

    </Link>
  </div>):(<></>)}

  </>
    
  );
};

export default MovieCard;
