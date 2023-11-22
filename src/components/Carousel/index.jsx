import React, { useState } from "react";
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

  return (
    <div className="d-flex align-items-center">
      <div
        className={`icon text-white`}
        onClick={() => {
          handleLeftClick();
        }}>
        <div className={`left-icon ${scrollLeftValue <= 0 ? "d-none" : "d-block"}`}></div>
      </div>
      <div>
        <div className="text-white">{genreTitle}</div>
        <div className="carousel-container d-flex row gap" id="carousel">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 2, 2, 2, 2].map((element, index) => {
            return <MovieCard text={element} key={index} />;
          })}
        </div>
      </div>

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
