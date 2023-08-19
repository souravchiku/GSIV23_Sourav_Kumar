import React, { useEffect, useState } from "react";
import movieApiKey from "../../common/apis/movieApiKey";
import moveApi from "../../common/apis/movieApi";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/moviesSlice";
import MovieListing from "../MovieListing/MovieListing";
import { useSelector } from "react-redux";

const config = {
  headers: { Authorization: "Bearer " + movieApiKey }
};
const Home = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.movies.searchText);
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    setIsloading(true);
    moveApi
      .get("movie/upcoming?language=en-US&page=1", config)
      .then((res) => {
        //console.log(res.data)
        dispatch(addMovies(res.data));
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const searchMovie = (movieName) => {
    setIsloading(true);
    let url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=f51eae6309f44b6fbdca6a74dade13b0`;
    moveApi
      .get(url, config)
      .then((res) => {
        //console.log(res.data)
        dispatch(addMovies(res.data));
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    searchText == "" ? fetchMovies() : searchMovie(searchText);
  }, [searchText]);

  return <div>{isLoading ? <p> loading</p> : <MovieListing />}</div>;
};

export default Home;
