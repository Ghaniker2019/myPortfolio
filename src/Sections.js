import React from "react";
import LastProjects from "./LastProjects";
import "./selections.css";
import Contact from "./Contact";

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
                    padding: "10px 40px 10px 40px",
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
                    padding: "10px 40px 10px 40px",
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
                    padding: "10px 40px 10px 40px",
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
                    padding: "10px 40px 10px 40px",
                  }}
                  href="#section04"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <section id="section01">
            <div style={{ margin: "100px 50px 100px 50px" }}>
              <article
                style={{
                  textAlign: "center",
                }}
              >
                <h1
                  style={{
                    paddingBottom: "10px",
                    borderBottom: "1px solid #615494",
                    fontSize: "37px",
                    margin: "150px 250px 20px 250px",
                  }}
                >
                  Qui suis - je
                </h1>
                <p style={{ margin: "5px 25px 5px 25px" }}>
                  Je m 'appelle Kerkoub Abdelghani. Je suis développeur Web &
                  Mobile depuis 1 ans déjà.J 'ai été formé au Reacteur (Paris)
                  où j' ai pu apprendre à réaliser des sites Internet et
                  applications Mobile.Mon expérience dans le développement m 'a
                  permis de monter rapidement en compétences, sur plusieurs
                  technologies prisées des startups ou grands groupes.Vous
                  trouverez sur ce blog, mes derniers projets.
                </p>
              </article>
            </div>
          </section>
          <section id="section02">
            <article
              style={{
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  paddingBottom: "10px",
                  borderBottom: "1px solid #615494",
                  fontSize: "37px",
                  margin: "150px 250px 20px 250px",
                }}
              >
                Mes derniers projects
              </h1>
              <div>
                <p> Voici quelques projets Web réalisés ces derniers temps. </p>
              </div>
              <LastProjects />
            </article>
          </section>
          <section id="section03">
            <article
              style={{
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  paddingBottom: "10px",
                  borderBottom: "1px solid #615494",
                  fontSize: "37px",
                  margin: "150px 250px 20px 250px",
                }}
              >
                Mes compétences techniques
              </h1>
              <p>Voici l'étendue de mes compétences en programmation.</p>
              <img
                style={{
                  height: "150px",
                  width: "80%",
                  position: "relative",
                  margin: "60px 10px 60px 10px",
                  borderRadius: "10px",
                }}
                src={require("./img/Compétences.png")}
                alt="Compétences"
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "50% 50%",
                  margin: "0px 50px 50px 50px",
                }}
              >
                <div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Autem harum, et voluptatum doloribus quo at atque, sint,
                    omnis voluptatem consectetur suscipit accusamus sapiente?
                    Molestias excepturi explicabo esse harum natus velit.
                  </p>
                </div>
                <div>
                  <p>
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
            <article
              style={{
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  paddingBottom: "10px",
                  borderBottom: "1px solid #615494",
                  fontSize: "37px",
                  margin: "150px 250px 20px 250px",
                }}
              >
                Contact
              </h1>
              <Contact />
            </article>
          </section>
        </div>
      </div>
    );
  }
}
export default Sections;
