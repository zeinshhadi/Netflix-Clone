import Button from "./components/Button";
import GetStartedForm from "./components/GetStartedForm";
import Navbar from "./components/Navbar";
import "./styles/utilities.css";
import "./styles/index.css";
import FAQs from "./components/FAQs";
import ComSection from "./components/Commercial";
import tv from "./images/tv.png";

import { faqData } from "./staticData/faq";
import Hero from "./components/Hero";

function App() {
  const commercialSectionComponents = [
    {
      text: "Enjoy on your TV",
      image: tv,
    },
    {
      text: "Download your shows to watch offline",
      image: "./images/mobile-0819.jpg",
    },
    {
      text: "Watch everywhere",
      image: "./images/device-pile.png",
    },
    {
      text: "Create profiles for kids",
      image: "../../images/kids.png",
    },
  ];
  return (
    <div className="App">
      <Hero />
      <div className="container">
        {commercialSectionComponents.map((element, index) => (
          <ComSection
            key={index}
            text={element.text}
            image={element.image}
            direction={`${index % 2 === 0 ? "row" : "reverse-row"}`}
          />
        ))}
        <div className="container">
          <div className="primary-title text-white text-center">Frequently Asked Questions</div>
          {faqData.map((faq) => {
            return (
              <>
                <FAQs {...faq} />
              </>
            );
          })}
        </div>
        <GetStartedForm />
      </div>
    </div>
  );
}

export default App;
