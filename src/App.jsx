import Button from "./components/Button";
import GetStartedForm from "./components/GetStartedForm";
import Navbar from "./components/Navbar";
import "./styles/utilities.css";
import "./styles/index.css";
import FAQs from "./components/FAQs";
import ComSection from "./components/Commercial";
import { faqData } from "./staticData/faq";
import Hero from "./components/Hero";
import tv from "./images/tv.png";
import mobile from "./images/mobile-0819.jpg";
import pile from "./images/device-pile.png";
import kids from "./images/kids.png";
import MovieCard from "./components/MovieCard";
import img from './images/bg-movie.jpg'
import Carousel from "./components/Carousel";
function App() {
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
    <div className="App">
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
      <Carousel/>

    </div>
  );
}

export default App;
