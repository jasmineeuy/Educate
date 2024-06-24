import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../css/Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div>
          {/* <i class="fa-solid fa-bars"></i> */}
          <FontAwesomeIcon icon={faBars} />
        </div>
        <nav>
          <ul>
            <li>
              <h1>Education</h1>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/center">Center</Link>
            </li>
            {/* <li>
              <Link to="/translate">Translate</Link>
            </li> */}
            <li>
              <Link to="/questions">Question</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
