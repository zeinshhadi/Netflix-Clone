import React from "react";
import "./index.css";
const ComSection = ({ text, image, description, direction }) => {
  return (
    <div className={`border-t`}>
      <div className={`d-flex wrap-sm space-between ${direction} container`}>
        <div className="left-section ">
          <div className="sec-title primary-title">{text}</div>
          <div className="sec-desc">{description}</div>
        </div>
        <div className="sec-image ">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ComSection;
