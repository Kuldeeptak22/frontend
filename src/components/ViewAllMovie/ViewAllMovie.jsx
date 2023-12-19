import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BaseURL } from "../../utils/common/APIs";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";
import { Box, CircularProgress } from "@mui/material";

const ViewAllMovie = () => {
  const categoryName = useParams();
  const [movie, setMovie] = useState([]);
  const [filteredItems, setFilteredItems] = useState(movie);
  const fetchMovie = () => {
    axios
      .get(`${BaseURL}/movies/get_movies`)
      .then((res) => setMovie(res.data.data))
      .catch((error) => {
        console.log(error);
      });
  };

  let dataFilter = categoryName.category;
  const filterItems = (dataFilter) => {
    const filtered = movie.filter((item) =>
      item?.category?.name?.toLowerCase()?.includes(dataFilter?.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  useEffect(() => {
    fetchMovie();
    filterItems(dataFilter);
  }, [movie]);

  return (
    <Container>
      <Row className="d-flex justify-center align-middle items-center py-5 fs-2 text-white">
      {categoryName?.category === "More Like This"
          ? categoryName?.category
          : `${categoryName?.category} Movie`}
      </Row>
      <Row className="my-5">
        {filteredItems.length !== 0 ? (
          filteredItems &&
          filteredItems?.map((data) => (
            <Col sm={3} className="p-4" key={data?._id}>
              <MovieCard elem={data} />
            </Col>
          ))
        ) : (
          <Box
            sx={{ display: "flex", justifyContent: "center", padding: "15px" }}
          >
            <CircularProgress />
          </Box>
        )}
      </Row>
    </Container>
  );
};

export default ViewAllMovie;
