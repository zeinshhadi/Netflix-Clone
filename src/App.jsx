import "./styles/utilities.css";
import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<MoviesPage />} path="/movies" />
          <Route element={<MovieDetailsPage />} path="/movieDetails/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
