import React from "react";
import Projects from "./Projects";
import "./sections.css";
import Contact from "./Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll'

class Sections extends React.Component {
  render() {
    return (
      <div className="main_container">
        <div className="container_sections">
          <nav className="navBar">
            <ul className="liste">
              <li className="item">
                <Link className="link" to="section01" smooth={true} duration={1000}>
                  Qui suis - je ?
                </Link>
              </li>
              <li className="item">
                <Link className="link" to="section02" smooth={true} duration={1200}>
                  Projects
                </Link>
              </li>
              <li className="item">
                <Link className="link" to="section03" smooth={true} duration={1500}>
                  Compétences
                </Link>
              </li>
              <li className="item">
                <Link className="link" to="section04" smooth={true} duration={1800}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <section id="section01">
            <article className="article">
              <h1 className="titles">Qui suis - je</h1>
              <p style={{ textAlign: "justify" }}>
                Je m'appelle Kerkoub Abdelghani. Je suis développeur Web &
                Mobile depuis 2 ans. J'ai été formé au Reacteur (Paris) où j'ai
                pu apprendre à réaliser des sites Internet et applications
                Mobile. Pour moi être développeur web c'est bien plus que
                programmer c'est avant tout savoir s'adapter aux spécificités de
                chaque projet et proposer les meilleures solutions. Mon envie
                d'apprendre et ma curiosité me permettent de monter rapidement
                en compétences, sur plusieurs technologies prisées des startups
                ou grands groupes. Vous trouverez sur ce blog, mes derniers
                projets.
              </p>
              <a
                class="btn-purpel btn"
                href="https://cvdesignr.com/p/5d6e6800d9cec"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mon CV <FontAwesomeIcon style={{ marginLeft: "4px", }}
                  icon={faEye}
                ></FontAwesomeIcon>
              </a>
            </article>
          </section>
          <section id="section02">
            <article className="article">
              <h1 className="titles">Mes derniers projects</h1>

              <p>Voici quelques projets Web réalisés ces derniers temps.</p>

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

              <div>
                <p className="competences_grid">
                  Hyper-Text Markup Language (HTML), JavaScript (JS), React,
                  React Native, Gatsby, Cascading Style Sheets (CSS), Bootstrap,
                  et Styled Components pour la partie front-end. Express,
                  Node.js et MongoDB pour la partie back-end.
                  <br />
                  Débogage, refactoring et optimisation du code existant. La
                  correction des bugs dans les projets existants. Tester de
                  nouvelles fonctionnalités pour s’assurer qu’elles exécutent
                  correctement dans tous les cas. Test des performances d’une
                  application Web ou d’un site Web créés. Participation à la
                  création de la conception UX (logique et transitions) et UI
                  (conception visuelle) en étroite collaboration avec les
                  concepteurs aux étapes pré-développement et a trouver les
                  meilleurs outils, technologies, langages et framework pour le
                  projet. La planification et le prototypage de nouvelles
                  applications ou de nouveaux sites Web. Rester à jour avec les
                  nouvelles tendances et les progrès dans le développement web.
                  La collecte des exigences et des souhaits des clients et des
                  utilisateurs.
                </p>

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
