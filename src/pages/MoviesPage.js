import React, { useEffect, useState } from "react";
import SliderMovie from "../components/Movies/SliderMovie";
import { Container, Row } from "react-bootstrap";
import BottomSlider from "../components/Movies/BottomSlider";
import SliderHeading from "../components/SliderHeading/SliderHeading";
import axios from "axios";
import { BaseURL } from "../utils/common/APIs";

const SliderHeadingData = {
  title1: "More Like This",
  title2: "Horror",
  title3: "Drama",
  title4: "Action",
  title5: "Comedy",
  title6: "Romantic ",
};

const MoviesPage = () => {
  const [movie, setMovie] = useState([]);
  const fetchMovie = () => {
    axios
      .get(`${BaseURL}/movies/get_movies`)
      .then((res) => setMovie(res.data.data))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <Container fluid className="p-0">
      <Row className="g-0">
        <SliderMovie />
        <SliderHeading SliderHeadingData={SliderHeadingData.title1} />
        <BottomSlider movie={movie} />
        <SliderHeading SliderHeadingData={SliderHeadingData.title2} />
        <BottomSlider movie={movie} />
        <SliderHeading SliderHeadingData={SliderHeadingData.title3} />
        <BottomSlider movie={movie} />
        <SliderHeading SliderHeadingData={SliderHeadingData.title4} />
        <BottomSlider movie={movie} />
        <SliderHeading SliderHeadingData={SliderHeadingData.title5} />
        <BottomSlider movie={movie} />
        <SliderHeading SliderHeadingData={SliderHeadingData.title6} />
        <BottomSlider movie={movie} />
      </Row>
    </Container>
  );
};

export default MoviesPage;
