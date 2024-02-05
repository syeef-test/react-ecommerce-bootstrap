import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className="container">
      <div className={`${classes.header} bg-light py-4`}>
        <h1>The Generics</h1>
      </div>
    </div>
  );
};

export default Header;
