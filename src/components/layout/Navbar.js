import React from "react";
import blooddrop from "../../assets/img/bdrop.png";
import SearchPage from "./SearchPage";
import "../../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/home">
        <img src={blooddrop} alt="bdroplogo" />
      </a>
      <a href="/donate">DONATE / REQUEST</a>
      <SearchPage />
    </nav>
  );
};

export default Navbar;
