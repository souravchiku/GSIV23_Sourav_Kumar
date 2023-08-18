import React, { useEffect } from "react";
import movieApiKey from "../../common/apis/movieApiKey";
import moveApi from "../../common/apis/movieApi";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/moviesSlice";
import MovieListing from "../MovieListing/MovieListing";

const config = {
  headers: { Authorization: "Bearer " + movieApiKey }
};
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = () => {
      moveApi
        .get("movie/upcoming?language=en-US&page=1", config)
        .then((res) => {
          //console.log(res.data)
          dispatch(addMovies(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchMovies();
  }, []);

  return (
    <div>
      Home
      <MovieListing />
    </div>
  );
};

export default Home;
