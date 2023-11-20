import React from "react";
import "./index.css";

const Button = ({ text }) => {
  return (
    <div>
      <button className="primary-btn">{text}</button>
    </div>
  );
};

export default Button;
