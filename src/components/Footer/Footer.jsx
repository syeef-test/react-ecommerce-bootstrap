import React from "react";

const Footer = () => {
  return (
    <footer className="bg-info text-white">
      <div className="d-flex justify-content-around align-items-center">
        <h1>The Generics</h1>
        <div className="d-flex justify-content-around">
          <a href="https://www.youtube.com">
            <img
              src="./img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
              alt="YouTube Logo"
            />
          </a>
          <a href="https://spotify.com">
            <img src="./img/Spotify Logo.png" alt="Spotify Logo" />
          </a>
          <a href="https://facebook.com">
            <img src="./img/Facebook Logo.png" alt="Facebook Logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
