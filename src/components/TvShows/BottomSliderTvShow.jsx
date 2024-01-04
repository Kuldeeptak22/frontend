import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row } from "react-bootstrap";
// import "./BottomSliderTvShow.scss";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import TvShowCard from "./TvShowCard";
import { fetchTvShows } from "../../utils/common/FetchApi";

const BottomSliderTvShow = ({ SliderHeadingData }) => {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //   const [filteredItems, setFilteredItems] = useState(show);

  //   const filterItems = (SliderHeadingData) => {
  //     const filtered = show.filter((item) =>
  //       SliderHeadingData !== "More Like This"
  //         ? item?.category?.name
  //             ?.toLowerCase()
  //             ?.includes(SliderHeadingData?.toLowerCase())
  //         : item
  //     );
  //     setFilteredItems(filtered);
  //   };

  useEffect(() => {
    fetchTvShows(setShows);
    setIsLoading(false);
    // filterItems(SliderHeadingData);
  }, []);

  //   const openMovieModal = () => {
  //     console.log("dddd");
  //   };
  const settings = {
    // dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 7,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Container
      className="d-flex justify-center flex-col align-middle items-center"
      style={{ padding: "0 28px" }}
    >
      <Row className="w-[97%]">
        {isLoading && (
          <div className="d-flex">
            <SkeletonCard cards={7} />
          </div>
        )}

        <Slider {...settings}>
          {shows &&
            shows.map((elem) => (
              <TvShowCard
                elem={elem}
                key={elem._id}
                // onMouseOver={openMovieModal}
              />
            ))}
        </Slider>
      </Row>
    </Container>
  );
};

export default BottomSliderTvShow;
