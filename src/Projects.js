import React, { Component } from "react";
import "./projects.css";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="project">
          <img
            className="img_project"
            src={require("./img/LiveforGood.png")}
            alt="allocine"
          />

          <h3 className="title_project"> Live for Good </h3>

          <a
            className="link_project"
            href="https://live-for-good.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le site
          </a>
        </div>
        <div className="project">
          <img
            className="img_project"
            src={require("./img/MyE-Commerce.png")}
            alt="allocine"
          />


          <h3 className="title_project"> My E-Commerce </h3>


          <a
            className="link_project"
            href="https://www.kerkoub.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le site
          </a>
        </div>
        <div className="project">
          <img
            className="img_project"
            src={require("./img/myTrainline.png")}
            alt="allocine"
          />

          <h3 className="title_project"> Trainline </h3>

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
            className="img_project"
            src={require("./img/allocine.png")}
            alt="allocine"
          />
          <h3 className="title_project"> Allocine </h3>

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
