import React from "react";
import "../../styles/utilities.css";

const ComSection = ({ text, image, direction }) => {
  return (
    <div className={`d-flex space-between ${direction}`}>
      <div>{text}</div>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default ComSection;
