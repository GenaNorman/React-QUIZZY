import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="block">
      <Link to="/signin">
        <button className="btn">SignIn</button>
      </Link>
      <Link to="/signup">
        <button className="btn">SignUp</button>
      </Link>
    </div>
  );
}

export default Home;
