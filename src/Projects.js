import React, { Component } from "react";
import "./projects.css";
import Grid from '@material-ui/core/Grid';

export default class Projects extends Component {
  render() {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <img
            className="img_project"
            src={require("./img/Live-for-Good.png")}
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
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            className="img_project"
            src={require("./img/Kerkoub.png")}
            alt="allocine"
          />


          <h3 className="title_project"> E-Commerce </h3>


          <a
            className="link_project"
            href="https://www.kerkoub.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le site
          </a>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            className="img_project"
            src={require("./img/Trainline.png")}
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
        </Grid>
        <Grid item xs={12} md={6}>
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
        </Grid>
      </Grid>
    );
  }
}
