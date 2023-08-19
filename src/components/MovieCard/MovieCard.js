import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDetails } from "../../features/movies/moviesSlice";
import "./MovieCard.scss";

const MovieCard = ({ title, rating, id, description, imageSrc }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleMovieDetail = (id) => {
    dispatch(setDetails(true));
    navigate("/details/" + id);
  };
  return (
    <div className="movie_card" onClick={() => handleMovieDetail(id)}>
      <img src={`http://image.tmdb.org/t/p/w200/${imageSrc}`} />
      <div className="movie_title">{title}</div>
      <span className="rating">{rating}</span>
      <div className="movie_description">
        <span>description:{description}</span>
      </div>
    </div>
  );
};

export default MovieCard;
