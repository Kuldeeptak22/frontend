import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BaseURL } from "../utils/common/APIs";
import MovieCard from "../components/MovieCard/MovieCard";

const SearchPage = () => {
  const data = useParams();
  console.log("data", data.data);

  const [movie, setMovie] = useState([]);
  const fetchMovie = () => {
    const encodedSearchQuery = encodeURIComponent(data.data);
    axios
      .get(`${BaseURL}/movies/get_movies?search=${encodedSearchQuery}`)
      .then((res) => setMovie(res.data.data))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  console.log("asasas", movie);
  return (
    <Container>
      <Row>
        <p className="fs-2 text-white pt-5 pb-3">Result</p>
        {movie &&
          movie.map((elem) => (
            <Col sm={2}>
              <MovieCard elem={elem} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default SearchPage;
