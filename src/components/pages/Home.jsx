import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Home
      <p>
        Go To About<Link to={"/about"}>About</Link>
      </p>
    </div>
  );
}

export default Home;
