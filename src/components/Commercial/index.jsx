import React from "react";
import "./index.css";
const ComSection = ({ text, image, description, direction }) => {
  return (
    <div className={`d-flex space-between ${direction} border-t`}>
      <div className="left-section">
        <div className="sec-title">{text}</div>
        <div className="sec-desc">{description}</div>
      </div>
      <div className="sec-image">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default ComSection;
