import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <div>
          <h1></h1>
          <i class="fa-solid fa-bars"></i>
        </div>
        <nav>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="Search.html">Search</a>
            </li>
            <li>
              <a href="form.html">Form</a>
            </li>
            <li>
              <a href="translate.html">Translate</a>
            </li>
            <li>
              <a href="Questions.html">Question</a>
            </li>
            <li>
              <a href="login.html">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;