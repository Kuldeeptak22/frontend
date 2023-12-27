import React from "react";
import { Container, Row } from "react-bootstrap";
import BottomSliderTvShow from "../components/TvShows/BottomSliderTvShow";
import SliderHeadingShow from "../components/TvShows/SliderHeadingShow";

const TvShowPage = () => {
  const SliderHeadingData = {
    title1: "More Like This",
    title2: "Mythology",
  };
  return (
    <Container fluid className="p-0">
      <Row className="g-0">
        <SliderHeadingShow SliderHeadingData={SliderHeadingData.title1} />
        <BottomSliderTvShow SliderHeadingData={SliderHeadingData.title1} />
        <SliderHeadingShow SliderHeadingData={SliderHeadingData.title2} />
        <BottomSliderTvShow SliderHeadingData={SliderHeadingData.title2} />
      </Row>
    </Container>
  );
};

export default TvShowPage;
