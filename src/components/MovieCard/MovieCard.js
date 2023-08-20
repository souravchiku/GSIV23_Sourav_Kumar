import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { setDetails } from "../../features/movies/moviesSlice";
import "./MovieCard.scss";

const MovieCard = ({ title, rating, id, description, imageSrc }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleMovieDetail = (id) => {
    dispatch(setDetails(true));
    navigate("/details/" + id, { state: { description: description } });
  };
  return (
    <div className="movie_card" onClick={() => handleMovieDetail(id)}>
      <div className="card-top">
        <img src={`http://image.tmdb.org/t/p/w200/${imageSrc}`} />
      </div>
      <div className="card-bottom">
        <div className="movie_title">
          <h3>{title.length >= 25 ? title.substring(0, 25) + "..." : title}</h3>{" "}
          <span className="rating">
            <AiFillStar />
            {rating}
          </span>
        </div>
        <div className="movie_description">
          <h3>
            {description.length >= 100
              ? description.substring(0, 100) + "..."
              : description}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
