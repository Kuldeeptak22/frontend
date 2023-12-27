import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { BaseURL } from "../../utils/common/APIs";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { useNavigate } from "react-router-dom";

const ExtraTvShowDetails = ({ data }) => {
  const navigate = useNavigate();
  const goToTvShowFrame = (id) => {
    navigate(`/seasons/seasonsFrame/${id}`)
  };
  return (
    <Container className="text-white">
      <Row className="">
        <p className="py-2 fw-bold fs-5">Episodes</p>
        <hr />
        <p className="py-2 fw-bold fs-6">Season 1</p>
      </Row>
      <Row>
        <Col sm={3} className="relative">
          <img
            src={`${BaseURL}/uploads/seasons/${data?.season?.poster}`}
            alt={data?.season?.epTitle}
            className="h-[8.3rem] w-60 rounded-1 cursor-pointer"
            onClick={() => goToTvShowFrame(data?.season?._id)}
          />
          <PlayArrowRoundedIcon className="absolute bottom-4 fs-2" />
        </Col>
        <Col sm={7}>
          <div className="pb-1 text-xl/6 fw-bold">{data?.season?.epTitle}</div>
          <div className="flex pb-1">
            <div className="text-xl/2 fw-bold">{data?.season?.episode}</div>
            <div className="text-slate-400 px-2">
              <FiberManualRecordIcon sx={{ fontSize: "8px" }} />
            </div>
            <div className="text-xl/2 fw-bold">{data?.season?.releaseDate}</div>
            <div className="text-slate-400 px-2">
              <FiberManualRecordIcon sx={{ fontSize: "8px" }} />
            </div>
            <div className="text-xl/2 fw-bold">42m</div>
          </div>
          <div className="text-gray-400 pb-1 text-sm">
            {data?.season?.description}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ExtraTvShowDetails;
