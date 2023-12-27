import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import React from "react";
import { BaseURL } from "../../utils/common/APIs";
import { useNavigate } from "react-router-dom";

const ShowCard = ({ elem }) => {
  const navigate = useNavigate();

  const goToShowDetailsPage = (id) => {
    navigate(`/tvShows/tvShowDetails/${id}`);
  };
  return (
    <>
      <Card
        sx={{ maxWidth: 400 }}
        key={elem?.title}
        onClick={() => goToShowDetailsPage(elem?._id)}
      >
        <CardActionArea>
          <CardMedia
            style={{ maxHeight: 400 }}
            component="img"
            height="100%"
            width="100px"
            image={`${BaseURL}/uploads/tvShows/${elem?.thumbnail}`}
            alt="green iguana"
          />
        </CardActionArea>
      </Card>
    </>
  );
};

export default ShowCard;
