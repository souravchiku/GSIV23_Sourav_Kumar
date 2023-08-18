import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MovieCard = ({ title, rating, id, description, imageSrc }) => {
  const navigate = useNavigate();
  const handleMovieDetail = (id) => {
    navigate("/details", { state: { id: id } });
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
