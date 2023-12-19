import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import axios from "axios";
import { BaseURL } from "../../utils/common/APIs";
import "./SliderMovie.scss";
import MovieDetail from "../MovieDetail/MovieDetail";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SliderMovie = () => {
  const [movie, setMovie] = useState([]);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

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
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {movie &&
          movie.slice(0).map((step) => (
            <MovieDetail data={step} key={step.title}/>
          ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
};

export default SliderMovie;
