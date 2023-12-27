import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard/MovieCard";
import { fetchData } from "../utils/common/FetchApi";

const SearchPage = () => {
  const data = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData(setMovie, data);
    setIsLoading(false)
  }, []);
  return (
    <Container>
      <Row>
        <p className="fs-2 text-white pt-5 pb-3">Result</p>
        {isLoading && <h1>Loading.....</h1>}
        {movie &&
          movie.map((elem) => (
            <Col sm={2} key={elem._id}>
              <MovieCard elem={elem}  />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default SearchPage;

// let data = [];
// let vari1 = "jj";
// let vari2 = "hh";
// data = [...vari1, ...vari2];

// console.log(data);
