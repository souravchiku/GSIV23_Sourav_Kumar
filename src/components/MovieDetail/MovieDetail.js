import React, { useEffect } from "react";
import "./MovieDetail.scss";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import movieApiKey from "../../common/apis/movieApiKey";
import moveApi from "../../common/apis/movieApi";
import { setMovieDetails } from "../../features/movies/moviesSlice";

const MovieDetail = () => {
  const location = useLocation();
  const movieDetails = useSelector((state) => state.movies.movieDetails);
  const { id } = useParams();
  const dispatch = useDispatch();
  const fetchMovieDetail = () => {
    //let url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=f51eae6309f44b6fbdca6a74dade13b0`;
    moveApi
      .get(`/movie/${id}?&api_key=f51eae6309f44b6fbdca6a74dade13b0`)
      .then((res) => {
        dispatch(setMovieDetails(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchMovieDetail();
    return () => {
      dispatch(setMovieDetails({}));
    };
  }, [id]);
  console.log(movieDetails);
  return (
    <div className="movie-section">
      {Object.keys(movieDetails).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <img
              src={`http://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
              alt={"image_text"}
            />
          </div>
          <div className="section-right">
            <div className="movie-title">{movieDetails.title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i></i> : {movieDetails.vote_average}
              </span>
              <span>
                IMDB Votes <i></i> :{movieDetails.vote_count}
              </span>
              <span>
                Runtime <i></i> : {movieDetails.runtime} min
              </span>
              <span>
                Year <i></i> : {movieDetails.release_date}
              </span>
            </div>
            <div className="movie-plot">{movieDetails.overview}</div>
            <div className="movie-info">
              <div>
                <span>Languages</span>
                <span>{movieDetails.original_languag}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
