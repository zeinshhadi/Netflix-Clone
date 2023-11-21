import React from "react";
import "./index.css";

const Button = ({ text, className, icon }) => {
  return (
    <div>
      <button className={`d-flex  center primary-btn ${className}`}>
        {text}
        {icon ? <img src={icon} /> : ""}
      </button>
    </div>
  );
};

export default Button;
