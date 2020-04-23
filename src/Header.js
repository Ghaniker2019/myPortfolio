import React from "react";
import "./img/PhotoGhani.jpg";
import "./header.css";

function Header() {
  return (
    <div className="main_container">
      <div className="container">
        <img
          className="img"
          src={require("./img/PhotoGhani.jpg")}
          alt="ma_photo"
        />

        <h1 className="title">Mon Portfolio</h1>
        <p>Voici mon travail en tant que développeur Web & Mobile.</p>
      </div>
    </div>
  );
}

export default Header;
