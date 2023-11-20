import React, { useEffect, useState } from "react";

import "./index.css";
const FAQs = ({ question, answer }) => {
  const [hide, setHide] = useState(true);

  const HandleCardClick = () => {
  
    if (hide) setHide(false);
    else setHide(true);
  };

  useEffect(() => {
   
  }, [hide]);

  return (
    <div className="faq-card text-white" >
      <div className="faq-question space-between bg-gray  d-flex" onClick={HandleCardClick} >
        <div className="question-title">{question}</div>
        <div className={`close-faq-btn ${!hide ? "rotate-45" : ""}`}>
          <div className="close"></div>
          <div className="close"></div>
        </div>
      </div>
      <div className={` faq-answer bg-gray ${hide ? "d-none" : ""}`}>
        {answer}
      </div>
    </div>
  );
};

export default FAQs;
