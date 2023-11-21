import Button from "./components/Button";
import GetStartedForm from "./components/GetStartedForm";
import Navbar from "./components/Navbar";
import "./styles/utilities.css";
import "./styles/index.css";
import FAQs from "./components/FAQs";

import { faqData } from "./staticData/faq";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">

      <Hero />
      <div className="container">
        {/* <Navbar /> */}

        {/* <Button text="hello" /> */}

        <div className="container">
          <div className="primary-title text-white text-center">
            Frequently Asked Questions
          </div>
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
