import React, { useState } from "react";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { addSearchText } from "../../features/movies/moviesSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
//import {AiOutlineSearch} from 'react-icons'
import "./Header.scss";

const Header = () => {
  const [searchText, setSearchText] = useState();
  const isDetails = useSelector((state) => state.movies.isDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const routeToHome = () => {
    navigate("/");
  };
  const handleSearchText = (val) => {
    setSearchText(val);
    dispatch(addSearchText(val));
  };
  return (
    <div className="mainHeader">
      {isDetails ? (
        <div className="movie_detail" onClick={routeToHome}>
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
