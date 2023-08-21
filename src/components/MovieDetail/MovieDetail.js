import React, { useEffect } from "react";
import "./MovieDetail.scss";
import { AiFillStar, AiFillLike } from "react-icons/ai";
import { MdMovieCreation, MdDateRange } from "react-icons/md";
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
    moveApi
      .get(`/movie/${id}?&api_key=${movieApiKey}`)
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
  console.log(location.state);
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
            <div className="movie-title">
              {movieDetails.title}( {movieDetails.tagline} )
            </div>
            <div className="movie-rating">
              <span>
                IMDB Rating {<AiFillStar className="icon" />} :{" "}
                {movieDetails.vote_average}
              </span>
              <span>
                IMDB Votes {<AiFillLike className="icon" />} :{" "}
                {movieDetails.vote_count}
              </span>
              <span>
                Runtime {<MdMovieCreation className="icon" />} :{" "}
                {movieDetails.runtime} min
              </span>
              <span>
                Release Date {<MdDateRange className="icon" />} :{" "}
                {movieDetails.release_date}
              </span>
            </div>
            <div className="movie-plot">
              <div>
                <h4>Overview :</h4>
                {movieDetails.overview}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
