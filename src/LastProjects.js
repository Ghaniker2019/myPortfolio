import React, { Component } from "react";

export default class LastProjects extends Component {
  render() {
    return (
      <div>
        <div style={{ marginBottom: "50px", marginTop: "50px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
          </div>
          <h3> Trainline </h3>
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
        <div style={{ marginBottom: "50px", marginTop: "50px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
          </div>
          <h3> Allocine </h3>
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
