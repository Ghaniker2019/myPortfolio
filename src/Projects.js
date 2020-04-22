import React, { Component } from "react";
import "./projects.css";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="project">
          <img
            style={{
              height: 300,
              width: 600,
              maxWidth: "100%",
              position: "relative",
              margin: "10 10 10 10",
            }}
            src={require("./img/myTrainline.png")}
            alt="allocine"
          />

          <h3 style={{ marginTop: "20px" }}> Trainline </h3>
          <p
            style={{
              paddingBottom: 30,
            }}
          >
            Ceci est un site réalisé pour la société lambda.Il a été créé grâce
            au langage HTML et CSS.
          </p>
          <a
            style={{
              textDecoration: "none",
              border: "solid 1px #DCDCDC",
              padding: 14,
              borderRadius: 5,
            }}
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
          <h3 style={{ marginTop: "20px" }}> Allocine </h3>
          <p
            style={{
              paddingBottom: 30,
            }}
          >
            Ceci est un site réalisé pour la société lambda.Il a été créé grâce
            au langage HTML et CSS.
          </p>
          <a
            style={{
              textDecoration: "none",
              border: "solid 1px #DCDCDC",
              padding: 14,
              borderRadius: 5,
            }}
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
