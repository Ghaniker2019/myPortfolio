import React, { Component } from "react";
import "./projects.css";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="project">
          <img
            className="img_project"
            src={require("./img/myTrainline.png")}
            alt="allocine"
          />

          <h3 className="title_project"> Trainline </h3>
          <p>
            Ceci est un site réalisé pour la société lambda.Il a été créé grâce
            au langage HTML et CSS.
          </p>
          <a
            className="link_project"
            href="https://ghaniker2019.github.io/trainline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le site
          </a>
        </div>
        <div className="project">
          <img
            style={{
              height: 300,
              width: 600,
              maxWidth: "100%",
              position: "relative",
              margin: "10px 10px 10px 10px",
            }}
            src={require("./img/allocine.png")}
            alt="allocine"
          />
          <h3 className="title_project"> Allocine </h3>
          <p>
            Ceci est un site réalisé pour la société lambda.Il a été créé grâce
            au langage HTML et CSS.
          </p>
          <a
            className="link_project"
            href="https://ghaniker2019.github.io/allocine/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le site
          </a>
        </div>
      </div>
    );
  }
}
