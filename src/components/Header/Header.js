import React, { useState } from "react";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
//import {AiOutlineSearch} from 'react-icons'
import "./Header.scss";

const Header = () => {
  const [searchText, setSearchText] = useState();

  const handleSearchText = (val) => {
    setSearchText(val);
  };
  return (
    <div className="mainHeader">
      <div className="headerSearch">
        <input
          placeholder="Search"
          onChange={(e) => handleSearchText(e.target.value)}
        />
        <AiOutlineSearch className="search_icon" />
      </div>
      <div className="home">
        <Link to="/">
          <AiFillHome className="home_icon" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
