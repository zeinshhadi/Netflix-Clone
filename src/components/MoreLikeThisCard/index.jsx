import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const MoreLikeThisCard = ({ moreLikeThis }) => {
  return (
    <div>
      <div className="primary-title text-white text-sm-center">More Like This</div>
      <div className="d-flex row wrap  gap center-elements">
        {moreLikeThis.map((movie, index) => {
          return (
            <div className="d-flex row more-like-this-card" key={index} >
              <Link to={`/movieDetails/${movie.id}`}><div className="img-wrapper">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />

              </div></Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoreLikeThisCard;
