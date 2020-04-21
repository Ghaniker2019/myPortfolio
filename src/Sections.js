import React from "react";
import LastProjects from "./LastProjects";
import "./selections.css";

class Sections extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#615494",
        }}
      >
        <div
          style={{
            border: "1px solid transparent",
            borderRadius: "15px",

            margin: "0px 10% 0px 10%",
            backgroundColor: "#FFFFFF",
          }}
        >
          <nav
            style={{
              height: "60px",
              backgroundColor: "#F7F7F7",
              border: "1px solid transparent",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
            }}
          >
            <ul
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                padding: "10px 5px 10px 5px",

                listStyle: "none",
                margin: 0,
                border: 0,
                fontSize: 20,
                verticalAlign: "baseline",
              }}
            >
              <li
                className="navOnHover"
                style={{
                  margin: "5px 40px 0 40px",
                }}
              >
                <a
                  style={{
                    color: "#636363",
                    textDecoration: "none",
                    fontSize: "18px",
                    padding: "10px 40px 15px 40px",
                  }}
                  href="#section01"
                >
                  Qui suis - je ?
                </a>
              </li>
              <li
                className="navOnHover"
                style={{
                  margin: "5px 40px 0 40px",
                }}
              >
                <a
                  style={{
                    color: "#636363",
                    textDecoration: "none",
                    fontSize: "18px",
                    padding: "10px 40px 15px 40px",
                  }}
                  href="#section02"
                >
                  Projects
                </a>
              </li>
              <li
                className="navOnHover"
                style={{
                  margin: "5px 40px 0 40px",
                }}
              >
                <a
                  style={{
                    color: "#636363",
                    textDecoration: "none",
                    fontSize: "18px",
                    padding: "10px 40px 15px 40px",
                  }}
                  href="#section03"
                >
                  Compétences
                </a>
              </li>
              <li
                className="navOnHover"
                style={{
                  margin: "5px 40px 0 40px",
                }}
              >
                <a
                  style={{
                    color: "#636363",
                    textDecoration: "none",
                    fontSize: "18px",
                    padding: "10px 40px 15px 40px",
                  }}
                  href="#section04"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <section id="section01">
            <div style={{ margin: "100px 50px 10px 50px" }}>
              <h1
                style={{
                  paddingBottom: 10,
                  borderBottom: "1px solid #615494",

                  margin: "50px 50px 10px 50px",
                }}
              >
                Qui suis - je
              </h1>
              <p style={{ margin: "5px 25px 5px 25px" }}>
                Je m 'appelle Kerkoub Abdelghani. Je suis développeur Web &
                Mobile depuis 1 ans déjà.J 'ai été formé au Reacteur (Paris) où
                j' ai pu apprendre à réaliser des sites Internet et applications
                Mobile.Mon expérience dans le développement m 'a permis de
                monter rapidement en compétences, sur plusieurs technologies
                prisées des startups ou grands groupes.Vous trouverez sur ce
                blog, mes derniers projets.
              </p>
            </div>
          </section>
          <section id="section02">
            <article
              style={{
                textAlign: "center",
              }}
            >
              <h2> Mes derniers projects </h2>
              <div>
                <p> Voici quelques projets Web réalisés ces derniers temps. </p>
              </div>
              <LastProjects />
            </article>
          </section>
          <section id="section03">
            <h1
              style={{
                justifyContent: "flex-end",
              }}
            >
              Section 03
            </h1>
          </section>
          <section id="section04">
            <h1> Section 04 </h1>
          </section>
        </div>
      </div>
    );
  }
}
export default Sections;
