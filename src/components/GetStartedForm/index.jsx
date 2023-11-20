import React from "react";
import "./index.css";
import Button from "../Button";
import icon from '../../images/icons/right.svg'
const GetStartedForm = () => {
  return (
    <div className="get-started-section d-flex column center text-white">
      <div className="form-title">
        Ready to watch? Enter your email to create or restart your membership.
      </div>
      <form className="get-started-form d-flex row center">
        <div className="input-group">
        <input type="email" className="email-input rounded-1" id="email-form" required />
        <label htmlFor="email-form">Email address</label>

        </div>
        <Button text="Get Started" className='get-started' icon={icon} />
      </form>
    </div>
  );
};

export default GetStartedForm;
