import "./styles/utilities.css";
import "./styles/index.css";
import ComSection from "./components/Commercial";
import tv from "./images/tv.png";
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
      <div className="container">
        {commercialSectionComponents.map((element, index) => (
          <ComSection
            key={index}
            text={element.text}
            image={element.image}
            direction={`${index % 2 === 0 ? "row" : "reverse-row"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
