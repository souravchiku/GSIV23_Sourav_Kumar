import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import { Link } from "react-router-dom";
import "./MovieListing.scss";
const MovieListing = () => {
  const movieLists = useSelector((state) => state.movies.movies);

  console.log(movieLists);

  return (
    <div className="movie_listing">
      {movieLists &&
        movieLists.length > 0 &&
        movieLists.map((item) => {
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
