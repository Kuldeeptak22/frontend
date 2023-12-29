import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import React from "react";
import { BaseURL } from "../../utils/common/APIs";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ elem }) => {
  const navigate = useNavigate();

  const goToMovieDetailsPage = (id) => {
    navigate(`/movies/movieDetails/${id}`);
  };
  return (
    <>
      <Card
        sx={{ maxWidth: 400 }}
        key={elem?.title}
        onClick={() => goToMovieDetailsPage(elem?._id)}
      >
        <CardActionArea>
          <CardMedia
            style={{ maxHeight: 400 }}
            component="img"
            height="100%"
            width="100px"
            image={`${BaseURL}/uploads/movies/${elem?.thumbnail}`}
            alt={elem?.title}
          />
        </CardActionArea>
      </Card>
    </>
  );
};

export default MovieCard;
