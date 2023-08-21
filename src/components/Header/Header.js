import React from "react";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { addSearchText } from "../../features/movies/moviesSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./Header.scss";

const Header = () => {
  const isDetails = useSelector((state) => state.movies.isDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const routeToHome = () => {
    navigate("/");
  };
  const handleSearchText = (val) => {
    dispatch(addSearchText(val));
  };
  return (
    <div className="mainHeader">
      {isDetails ? (
        <div className="movie_detail">
          <h3> Movie Detials </h3>
        </div>
      ) : (
        <div className="headerSearch">
          <input
            placeholder="Search"
            onChange={(e) => handleSearchText(e.target.value)}
          />
          <AiOutlineSearch className="search_icon" />
        </div>
      )}
      <div className="home" onClick={routeToHome}>
        <AiFillHome className="home_icon" />
      </div>
    </div>
  );
};

export default Header;
