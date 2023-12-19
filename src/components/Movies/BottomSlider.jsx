import React from "react";
import { BaseURL } from "../../utils/common/APIs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardActionArea, CircularProgress } from "@mui/material";
import { Container, Row } from "react-bootstrap";
import "./BottomSlider.scss";
import { useNavigate } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";

const BottomSlider = ({ movie }) => {
  const openMovieModal = () => {
    console.log("dddd");
  };

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
        <Slider {...settings}>
          {movie.length !== 0 ? (
            movie &&
            movie.map((elem) => (
              <MovieCard
                elem={elem}
                key={elem._id}
                onMouseOver={openMovieModal}
              />
            ))
          ) : (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
        </Slider>
      </Row>
    </Container>
  );
};

export default BottomSlider;
