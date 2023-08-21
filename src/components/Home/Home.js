import React, { useEffect, useState } from "react";
import movieApiKey from "../../common/apis/movieApiKey";
import moveApi from "../../common/apis/movieApi";
import { useDispatch } from "react-redux";
import {
  addMovies,
  setDetails,
  setLoading,
  setPage
} from "../../features/movies/moviesSlice";
import MovieListing from "../MovieListing/MovieListing";
import { useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.movies.searchText);
  const movies = useSelector((state) => state.movies.movies);
  const isLoading = useSelector((state) => state.movies.loading);
  const page = useSelector((state) => state.movies.page);
  const [error, setError] = useState(false);

  const fetchMovies = () => {
    dispatch(setLoading(true));
    moveApi
      .get(`movie/upcoming?language=en-US&page=${page}?&api_key=${movieApiKey}`)
      .then((res) => {
        dispatch(addMovies(res.data.results));
        dispatch(setDetails(false));
        dispatch(setLoading(false));
      })
      .catch((err) => {
        setError(true);
      });
  };
  const searchMovie = (movieName) => {
    dispatch(setLoading(true));
    let url =
      movieName == ""
        ? `movie/upcoming?language=en-US&page=1?&api_key=${movieApiKey}`
        : `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${movieApiKey}`;
    moveApi
      .get(url)
      .then((res) => {
        dispatch(addMovies(res.data.results));
        dispatch(setLoading(false));
      })
      .catch((err) => {
        setError(true);
      });
  };
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 10
    ) {
      dispatch(setPage(page + 1));
      moveApi
        .get(
          `movie/upcoming?language=en-US&page=${
            page + 1
          }&api_key=${movieApiKey}`
        )
        .then((res) => {
          let dataTostore = movies;
          dataTostore = dataTostore.concat(res.data.results);
          dispatch(addMovies(dataTostore));
          dispatch(setLoading(false));
        })
        .catch((err) => {
          setError(true);
        });
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  useEffect(() => {
    searchMovie(searchText);
  }, [searchText]);

  return (
    <>
      {isLoading ? (
        <div className="loading">
          <p>Please wait</p>
          <p> Loading..</p>
        </div>
      ) : error ? (
        <p>Something Went wrong </p>
      ) : (
        <MovieListing />
      )}
    </>
  );
};

export default Home;
