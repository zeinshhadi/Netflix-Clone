import Button from './components/Button';
import GetStartedForm from './components/GetStartedForm';
import Navbar from './components/Navbar';
import './styles/utilities.css';
import './styles/index.css';


function App() {
  return (
    <div className="App">

      <div className='container'>
      <Navbar />

        <Button text="hello" />
        <GetStartedForm />
      </div>

    </div>
  );
}

export default App;
