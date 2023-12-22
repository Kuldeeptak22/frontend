import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TvShowPage from "./pages/TvShowPage";
import MoviesPage from "./pages/MoviesPage";
import BlogsPage from "./pages/BlogsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieDetails from "./components/MovieDetail/MovieDetails";
import MovieFrame from "./components/MovieFrame/MovieFrame";
import ViewAllMovie from "./components/ViewAllMovie/ViewAllMovie";
import Footer from "./components/Footer/Footer";
import AboutUsPage from "./pages/AboutUsPage";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SearchPage from "./pages/SearchPage";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <Router>
          <Navbar />
          {/* <NavDrawer/> */}
          <Routes>
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/tvShows" element={<TvShowPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/searchPage/:data" element={<SearchPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/termsOfUse" element={<TermsOfUse />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route
              path="/movies/movieDetails/:movie_id"
              element={<MovieDetails />}
            />
            <Route
              path="/movies/movieFrame/:movie_id"
              element={<MovieFrame />}
            />
            <Route
              path="/movies/viewAllMovies/:category"
              element={<ViewAllMovie />}
            />
          </Routes>
          <Footer />
        </Router>
      </SkeletonTheme>
    </div>
  );
}

export default App;
