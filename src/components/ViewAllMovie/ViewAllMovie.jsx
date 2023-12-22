import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BaseURL } from "../../utils/common/APIs";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";
import SkeletonCard from "../SkeletonCard/SkeletonCard";

const ViewAllMovie = () => {
  const categoryName = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredItems, setFilteredItems] = useState(movie);

  const fetchMovie = async () => {
    try {
      const dataResponse = await axios.get(`${BaseURL}/movies/get_movies`);
      setMovie(dataResponse.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  let dataFilter = categoryName.category;
  const filterItems = (dataFilter) => {
    const filtered = movie.filter((item) =>
      dataFilter !== "More Like This"
        ? item?.category?.name
            ?.toLowerCase()
            ?.includes(dataFilter?.toLowerCase())
        : item
    );
    setFilteredItems(filtered);
  };

  useEffect(() => {
    fetchMovie();
    filterItems(dataFilter);
  }, [movie]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Row className="d-flex justify-center align-middle items-center py-5 fs-2 text-white">
        {categoryName?.category === "More Like This"
          ? categoryName?.category
          : `${categoryName?.category} Movie`}
      </Row>
      <Row className="my-5">
        {isLoading && (
          <div className="d-flex">
            <SkeletonCard cards={7} />
          </div>
        )}
        {filteredItems &&
          filteredItems?.map((data) => (
            <Col sm={2} className="p-2" key={data?._id}>
              <MovieCard elem={data} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ViewAllMovie;
