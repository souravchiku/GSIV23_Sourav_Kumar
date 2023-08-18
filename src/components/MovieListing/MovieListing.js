import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import { Link } from "react-router-dom";
import "./MovieListing.scss";
const MovieListing = () => {
  const movieLists = useSelector((state) => state.movies.movies);

  const handleMovieDetail = (id) => {
    console.log(id);
  };

  return (
    <div className="movie_listing">
      {movieLists.results &&
        movieLists.results.map((item) => {
          return (
            <MovieCard
              title={item.title}
              description={item.overview}
              imageSrc={item.poster_path}
              rating={item.vote_average}
              id={item.id}
              key={item.id}
            />
          );
        })}
    </div>
  );
};

export default MovieListing;
