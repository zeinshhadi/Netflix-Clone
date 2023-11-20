import React from "react";
import "./index.css";
const Carousel = ({ imageUrl }) => {
  return (
    <div className="d-flex row gap">
      <div className="icon before d-flex center"> &lt;</div>
      <div className="card">
        <div>
          <img src={imageUrl} alt="" />
        </div>
        <div>title</div>
      </div>

      <div className="icon after d-flex center"> &gt;</div>
    </div>
  );
};

export default Carousel;
