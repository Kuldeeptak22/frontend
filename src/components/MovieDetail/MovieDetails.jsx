import React, { useEffect, useState } from "react";
import MovieDetail from "./MovieDetail";
import axios from "axios";
import { BaseURL } from "../../utils/common/APIs";
import { useParams } from "react-router-dom";
import BottomSlider from "../Movies/BottomSlider";
import ExtraDetails from "./ExtraDetails";

const MovieDetails = () => {
  const movie_id = useParams();
  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);
  const fetchMovie = () => {
    axios
      .get(`${BaseURL}/movies/get_movie/${movie_id?.movie_id}`)
      .then((res) => setMovie(res?.data?.data))
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchMovies = () => {
    axios
      .get(`${BaseURL}/movies/get_movies`)
      .then((res) => setMovies(res?.data?.data))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchMovie();
    fetchMovies();
    
  }, []);

  return (
    <>
      <MovieDetail data={movie} />
      <ExtraDetails data={movie}/>
      <BottomSlider movie={movies} />
    </>
  );
};

export default MovieDetails;
