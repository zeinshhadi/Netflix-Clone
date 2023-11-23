import React from "react";
import logo from "../../images/Netflix_Logo_PMS.png";
import "./index.css";
import Button from "../Button";
import { Link } from "react-router-dom";
import TranslateButton from "../TranslateButton";
const Navbar = ({ className,showTranslate }) => {
  return (
    <div className={` navbar`}>
      <div className={`${className}  d-flex space-between text-white `}>
        <Link to="/">
          <div className="img-container">
            <img src={logo} className="logo" alt="" />
          </div>
        </Link>
        <div className="d-flex gap">
          {showTranslate?(<TranslateButton />):(<Button text="JOIN NOW"/>)}
          <Link to="movies">
            <Button text="SIGN IN" className={'btn-outline'}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
