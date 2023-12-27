import React, { useEffect, useState } from "react";
import axios from "axios";
import { BaseURL } from "../../utils/common/APIs";
import { useParams } from "react-router-dom";
import TvShowDetail from "./TvShowDetail";
import ExtraTvShowDetails from "./ExtraTvShowDetails";
import { fetchTvShows } from "../../utils/common/FetchApi";
// import BottomSlider from "../Movies/BottomSlider";
// import ExtraDetails from "./ExtraDetails";

const TvShowDetails = () => {
  const tvShow_id = useParams();
  const [show, setShow] = useState({});
  const [shows, setShows] = useState([]);

  const fetchTvShow = async () => {
    try {
      const dataResponse = await axios.get(
        `${BaseURL}/tvShows/get_tvShow/${tvShow_id?.tvShow_id}`
      );
      setShow(dataResponse?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchTvShow();
    fetchTvShows(setShows);
  }, []);

  return (
    <>
      <TvShowDetail data={show} />
      <ExtraTvShowDetails data={show} />
      {/* <ExtraDetails data={movie}/>
      <BottomSlider movie={movies} />  */}
    </>
  );
};

export default TvShowDetails;
