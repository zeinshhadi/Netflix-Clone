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
function App() {
  const commercialSectionComponents = [
    {
      text: "Enjoy on your TV",
      description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      image: tv,
    },
    {
      text: "Download your shows to watch offline",
      description: "Save your favorites easily and always have something to watch.",
      image: phone,
    },
    {
      text: "Watch everywhere",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      image: pile,
    },
    {
      text: "Create profiles for kids",
      description:
        "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
      image: kids,
    },
  ];

  return <div className="App"></div>;
}

export default App;
