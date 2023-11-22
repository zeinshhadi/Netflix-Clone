import Button from "./components/Button";
import GetStartedForm from "./components/GetStartedForm";
import Navbar from "./components/Navbar";
import "./styles/utilities.css";
import "./styles/index.css";
import FAQs from "./components/FAQs";
import ComSection from "./components/Commercial";
import Hero from "./components/Hero";

import Carousel from "./components/Carousel";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import MovieDetailsPage from './pages/MovieDetailsPage'



function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element={<HomePage/>} path="/" />
            <Route element={<MoviesPage />} path="/movies" />
            <Route element={<MovieDetailsPage />} path="/movies/id" />
          </Routes>
        </BrowserRouter>




     

    </div>
  );
}

export default App;
