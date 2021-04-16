import React from "react";
import "./img/PhotoGhani.jpg";
import "./header.css";

function Header() {
  return (
    <div className="main_container">
      <a href="https://github.com/Ghaniker2019"
        target="_blank" rel="noopener noreferrer" > <img
          className="imgLinkGit"
          src={require("./img/github.png")}
          alt="ma_photo"

        /></a>
      <a href="https://www.linkedin.com/in/kerkoub/"
        target="_blank" rel="noopener noreferrer" >   <img
          className="imgLinkLinkedin"
          src={require("./img/linkedin.png")}
          alt="ma_photo"

        /></a>
      <a href="https://www.instagram.com/ghanikerk/"
        target="_blank" rel="noopener noreferrer" >    <img
          className="imgLinkInsta"
          src={require("./img/insta.png")}
          alt="ma_photo"

        /></a>
      <div className="container">
        <img
          className="img"
          src={require("./img/Ghani-Linkedin-circle.png")}
          alt="ma_photo"

        />

        <h1 className="title">Mon Portfolio</h1>
        <h2>Développeur web & mobile</h2>
      </div>
    </div >
  );
}

export default Header;
