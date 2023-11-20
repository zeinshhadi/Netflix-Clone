import Button from "./components/Button";
import GetStartedForm from "./components/GetStartedForm";
import Navbar from "./components/Navbar";
import "./styles/utilities.css";
import "./styles/index.css";
import ComSection from "./components/Commercial";
import tv from "../src/images/tv.png";
import phone from "../src/images/mobile-0819.jpg";
import pile from "../src/images/device-pile.png";
import kids from "../src/images/kids.png";
import Carousel from "./components/Carousel";

function App() {
  const commercialSectionComponents = [
    {
      text: "Enjoy on your TV",
      image: tv,
    },
    {
      text: "Download your shows to watch offline",
      image: phone,
    },
    {
      text: "Watch everywhere",
      image: pile,
    },
    {
      text: "Create profiles for kids",
      image: kids,
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Button text="hello" />
        <GetStartedForm />
        {commercialSectionComponents.map((element, index) =>
          index % 2 === 0 ? (
            <ComSection key={index} text={element.text} image={element.image} direction={"row"} />
          ) : (
            <ComSection key={index} text={element.text} image={element.image} direction={"reverse-row"} />
          )
        )}
        <Carousel />
      </div>
    </div>
  );
}

export default App;
