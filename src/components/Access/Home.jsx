import React    from "react";


import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="header">
      <div className="header__logo">Quizzy</div>
      <ul className="header__nav">
        <li className="header__nav--type">home</li>
        <li className="header__nav--type">about</li>
        <li className="header__nav--type">services</li>
        <li className="header__nav--type">signup</li>
      </ul>
      <div className="header__access">Login</div>
      {/* <img src="/images/home/land.png" alt="land" /> */}
    </div>
  );
}

export default Home;
