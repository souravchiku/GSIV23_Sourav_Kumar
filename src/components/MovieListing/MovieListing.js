import React from "react";
import { useSelector } from "react-redux";
const MovieListing = () => {
  const movies = useSelector((state) => console.log(state.movies));
  return <div>MovieListing</div>;
};

export default MovieListing;
