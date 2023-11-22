import React from "react";
import "./index.css";
import ComSection from "../../components/Commercial";
import Hero from "../../components/Hero";
import FAQs from "../../components/FAQs";
import GetStartedForm from "../../components/GetStartedForm";
import tv from "./../../images/tv.png";
import mobile from "./../../images/mobile-0819.jpg";
import pile from "./../../images/device-pile.png";
import kids from "./../../images/kids.png";
import { faqData } from "./../../staticData/faq";

const HomePage = () => {
  const commercialSectionComponents = [
    {
      text: "Enjoy on your TV",
      desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      image: tv,
    },
    {
      text: "Download your shows to watch offline",
      desc: "Save your favorites easily and always have something to watch.",
      image: mobile,
    },
    {
      text: "Watch everywhere",
      desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      image: pile,
    },
    {
      text: "Create profiles for kids",
      desc: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
      image: kids,
    },
  ];
  return (
    <div className="">
      <Hero />
      {commercialSectionComponents.map((element, index) => (
        <ComSection
          key={index}
          text={element.text}
          description={element.desc}
          image={element.image}
          direction={`${index % 2 === 0 ? "row" : "reverse-row"}`}
        />
      ))}
      <div className="container">
        <div className="container">
          <div className="primary-title text-white text-center">Frequently Asked Questions</div>
          {faqData.map((faq, index) => {
            return (
              <>
                <FAQs {...faq} key={index} />
              </>
            );
          })}
        </div>
        <GetStartedForm />
      </div>
    </div>
  );
};

export default HomePage;
