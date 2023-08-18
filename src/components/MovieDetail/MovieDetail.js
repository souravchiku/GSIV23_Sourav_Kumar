import React from "react";
import "./MovieDetail.scss";
import { useLocation } from "react-router-dom";

const MovieDetail = () => {
  const location = useLocation();
  const { id } = location.state;
  return <div>{id}</div>;
};

export default MovieDetail;
