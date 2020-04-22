import React from "react";
import Projects from "./Projects";
import "./selections.css";
import Contact from "./Contact";

class Sections extends React.Component {
  render() {
    return (
      <div className="main_container">
        <div className="container_sections">
          <nav
            className="navBar"
            style={{
              height: "60px",
              backgroundColor: "#F7F7F7",
              border: "1px solid transparent",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
            }}
          >
            <ul className="liste">
              <li className="item">
                <a className="link" href="#section01">
                  Qui suis - je ?
                </a>
              </li>
              <li className="item">
                <a className="link" href="#section02">
                  Projects
                </a>
              </li>
              <li className="item">
                <a className="link" href="#section03">
                  Compétences
                </a>
              </li>
              <li className="item">
                <a className="link" href="#section04">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <section id="section01">
            <article className="article">
              <h1 className="titles">Qui suis - je</h1>
              <p style={{ margin: "5px 25px 5px 25px" }}>
                Je m 'appelle Kerkoub Abdelghani. Je suis développeur Web &
                Mobile depuis 1 ans déjà.J 'ai été formé au Reacteur (Paris) où
                j' ai pu apprendre à réaliser des sites Internet et applications
                Mobile.Mon expérience dans le développement m 'a permis de
                monter rapidement en compétences, sur plusieurs technologies
                prisées des startups ou grands groupes.Vous trouverez sur ce
                blog, mes derniers projets.
              </p>
            </article>
          </section>
          <section id="section02">
            <article className="article">
              <h1 className="titles">Mes derniers projects</h1>
              <div>
                <p> Voici quelques projets Web réalisés ces derniers temps. </p>
              </div>
              <Projects />
            </article>
          </section>
          <section id="section03">
            <article className="article">
              <h1 className="titles">Mes compétences techniques</h1>
              <p>Voici l'étendue de mes compétences en programmation.</p>
              <img
                className="image"
                src={require("./img/Compétences.png")}
                alt="Compétences"
              />

              <div className="containter_grid">
                <div>
                  <p style={{ padding: "5px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Autem harum, et voluptatum doloribus quo at atque, sint,
                    omnis voluptatem consectetur suscipit accusamus sapiente?
                    Molestias excepturi explicabo esse harum natus velit.
                  </p>
                </div>
                <div>
                  <p style={{ padding: "5px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Autem harum, et voluptatum doloribus quo at atque, sint,
                    omnis voluptatem consectetur suscipit accusamus sapiente?
                    Molestias excepturi explicabo esse harum natus velit.
                  </p>
                </div>
              </div>
            </article>
          </section>
          <section id="section04">
            <article className="article">
              <h1 className="titles">Contact</h1>
              <Contact />
            </article>
          </section>
        </div>
      </div>
    );
  }
}
export default Sections;
