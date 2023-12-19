import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { BaseURL } from "../../utils/common/APIs";
import "./MovieDetail.scss";
import { useNavigate } from "react-router-dom";

const MovieDetail = ({ data }) => {
  const navigate = useNavigate();

  const goToMovieFrame = (id) => {
    navigate(`/movies/movieFrame/${id}`);
  };
  return (
    <div
      key={data?.title}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url(${BaseURL}/uploads/movies/${data?.poster})`,
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: 600,
      }}
    >
      <div className="d-flex flex-col justify-end pb-24 items-center sm:items-start  h-100 sm:px-36 text-white">
        <div
          className="fs-1 font-bold text-center text-red-600"
          style={{ textShadow: "2px 2px 4px white" }}
        >
          {!data?.movieLogo ? (
            data?.title?.toUpperCase()
          ) : (
            <img
              src={`${BaseURL}/uploads/movies/${data?.movieLogo}`}
              alt={data?.movieLogo}
              className="my-3 max-h-24 img-fluid px-2"
            />
          )}
        </div>
        <div className="fs-6 d-flex font-medium">
          <div className="pr-1">{data?.releaseDate?.slice(0, 4)}</div>
          <div className="text-slate-400">
            <FiberManualRecordIcon sx={{ fontSize: "8px" }} />
          </div>
          <div className="px-1">{data?.duration}</div>
          <div className="text-slate-400">
            <FiberManualRecordIcon sx={{ fontSize: "8px" }} />
          </div>
          <div className="px-1">{data?.language}</div>
        </div>
        <div className="fs-6 my-2 text-center">{data?.shortDescription}</div>
        <div className="fs-6 font-medium my-2 d-flex">
          <div className="pr-2">{data?.category?.name}</div>
          <div className="text-slate-400">|</div>
          <div className="px-2">{data?.zone?.name}</div>
          <div className="text-slate-400">|</div>
          <div className="px-2">
            {data?.category?.name === "Action"
              ? "Entertainment"
              : data?.category?.name === "Romantic"
              ? "Drama"
              : data?.category?.name === "Animation"
              ? "Action"
              : data?.category?.name === "Drama"
              ? "Entertainment"
              : data?.category?.name === "Horror"
              ? "Thriller"
              : data?.category?.name === "Sci-fi"
              ? "Thriller"
              : ""}
          </div>
        </div>
        <div className="py-3 d-flex flex-col sm:flex-row">
          <Button
            variant="contained"
            className="py-3 fw-bold"
            sx={{ padding: "0 6rem" }}
            onClick={() => goToMovieFrame(data?._id)}
          >
            Watch Now
          </Button>

          <Button
            color="primary"
            variant="outlined"
            aria-label="add"
            className="mx-2 py-2 py-sm-3 my-4 my-sm-0 border-white text-white"
          >
            <AddIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
