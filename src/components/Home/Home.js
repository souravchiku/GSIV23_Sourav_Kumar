import React, { useEffect, useState } from "react";
import movieApiKey from "../../common/apis/movieApiKey";
import moveApi from "../../common/apis/movieApi";
import { useDispatch } from "react-redux";
import { addMovies, setDetails } from "../../features/movies/moviesSlice";
import MovieListing from "../MovieListing/MovieListing";
import { useSelector } from "react-redux";

const config = {
  headers: { Authorization: "Bearer " + movieApiKey }
};
const Home = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.movies.searchText);
  const movies = useSelector((state) => state.movies.movies);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(setDetails(false));
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    setIsloading(true);
    moveApi
      .get(`movie/upcoming?language=en-US&page=${page}`, config)
      .then((res) => {
        console.log(res.data.results);
        dispatch(addMovies(res.data.results));
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
        dispatch(addMovies(res.data.results));
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 10
    ) {
      setPage((prev) => prev + 1);
      moveApi
        .get(`movie/upcoming?language=en-US&page=${page + 1}`, config)
        .then((res) => {
          //console.log(res.data)
          let dataTostore = movies;
          dataTostore = dataTostore.concat(res.data.results);
          dispatch(addMovies(dataTostore));
          setIsloading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);
  useEffect(() => {
    searchText == "" ? fetchMovies() : searchMovie(searchText);
  }, [searchText]);

  return <>{isLoading ? <p> loading</p> : <MovieListing />}</>;
};

export default Home;
