import React from "react";
import logo from "../../images/Netflix_Logo_PMS.png";
import "./index.css";
import Button from "../Button";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={`d-flex space-between text-white  navbar`}>
    <Link to='/'>
    <div className="img-container">
        <img src={logo} className="logo" alt="" />
      </div>
      </Link>
      <div>
        <Link to='movies'>
        <Button text="Sign In" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
