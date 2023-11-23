import React from "react";
import "./index.css";
const MoreLikeThisCard = ({ moreLikeThis }) => {
  return (
    <div>
      <div className="primary-title text-white">More Like This</div>
      <div className="d-flex row wrap  gap">
        {moreLikeThis.map((movie, index) => {
          return (
            <div className="d-flex row more-like-this-card" key={index} >
              <div className="img-wrapper">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoreLikeThisCard;
