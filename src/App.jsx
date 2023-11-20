import Button from './components/Button';
import GetStartedForm from './components/GetStartedForm';
import Navbar from './components/Navbar';
import './styles/utilities.css';
import './styles/index.css';
import FAQs from './components/FAQs';

import { faqData } from './staticData/faq';

function App() {
  return (
    <div className="App">

      <div className='container'>
      {/* <Navbar /> */}

        {/* <Button text="hello" /> */}
       


        <div className='container'>
        {faqData.map((faq)=>{return(<>
          <FAQs {...faq}/>
        </>)})}

      </div>
      </div>

     
      <div className="container">
        <GetStartedForm />
      </div>

    </div>
  );
}

export default App;
