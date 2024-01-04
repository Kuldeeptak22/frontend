import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import TvShowDetails from "./components/TvShows/TvShowDetails";
import TvShowFrame from "./components/TvShows/TvShowFrame";
import ViewAllShow from "./components/TvShows/ViewAllShow";
import SeasonsFrame from "./components/TvShows/SeasonsFrame";
import MyProfile from "./pages/MyProfile";
import BlogDetail from "./components/Blog/BlogDetail";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const token = localStorage.getItem("UserToken");
  const user = JSON.parse(localStorage.getItem("User"));
  return (
    <div className="App">
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <Router>
          <Navbar />
          {/* <NavDrawer/> */}
          <Routes>
            <Route path="/" element={<MoviesPage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/tvShows" element={<TvShowPage />} />
            <Route
              path="/myProfile"
              element={user ? <MyProfile user={user} /> : <Navigate to="/login" />}
            />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/searchPage/:data" element={<SearchPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/termsOfUse" element={<TermsOfUse />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route
              path="/signUp"
              element={token ? <Navigate to="/" /> : <SignUpPage />}
            />
            <Route
              path="/login"
              element={token ? <Navigate to="/" /> : <LoginPage />}
            />
            <Route
              path="/movies/movieDetails/:movie_id"
              element={<MovieDetails />}
            />
            <Route
              path="/movies/movieFrame/:movie_id"
              element={token ? <MovieFrame /> : <Navigate to="/login" />}
            />
            <Route
              path="/movies/viewAllMovies/:category"
              element={<ViewAllMovie />}
            />
            <Route
              path="/tvShows/tvShowDetails/:tvShow_id"
              element={<TvShowDetails />}
            />
            <Route
              path="/tvShows/tvShowFrame/:tvShow_id"
              element={token ? <TvShowFrame /> : <Navigate to="/login" />}
            />
            <Route
              path="/tvShows/viewAllShows/:category"
              element={<ViewAllShow />}
            />
            <Route
              path="/seasons/seasonsFrame/:season_id"
              element={token ? <SeasonsFrame /> : <Navigate to="/login" />}
            />
            <Route
              path="/blogs/blogDetails/:blog_id"
              element={<BlogDetail />}
            />
          </Routes>
          <Footer />
        </Router>
      </SkeletonTheme>
    </div>
  );
}

export default App;
