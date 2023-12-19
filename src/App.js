import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TvShowPage from "./pages/TvShowPage";
import MoviesPage from "./pages/MoviesPage";
import BlogsPage from "./pages/BlogsPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import MovieDetails from "./components/MovieDetail/MovieDetails";
import MovieFrame from "./components/MovieFrame/MovieFrame";
import ViewAllMovie from "./components/ViewAllMovie/ViewAllMovie";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/tvShows" element={<TvShowPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/movies/movieDetails/:movie_id" element={<MovieDetails />} />
          <Route path="/movies/movieFrame/:movie_id" element={<MovieFrame />} />
          <Route path="/movies/viewAllMovies/:category" element={<ViewAllMovie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
