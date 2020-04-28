import React, { Component } from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./fonts/SourceSansPro-Regular.ttf";

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    isSent: false,
  };

  change = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  submit = (e) => {
    console.log("<============onSubmit");
  };
  render() {
    return (
      <div>
        <p style={{ fontSize: "23px", fontWeight: "lighter" }}>
          Vous souhaitez me contacter ? C'est parti !
        </p>
        <form onSubmit={this.submit} style={{ margin: "80px 30% 15px 30%" }}>
          <div class="form-group">
            <input
              className="form"
              style={{ fontSize: "20px", fontWeight: "lighter" }}
              onChange={this.change}
              type="name"
              class="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Votre nom"
            />
          </div>
          <div class="form-group">
            <input
              className="form"
              style={{ fontSize: "20px", fontWeight: "lighter" }}
              onChange={this.change}
              type="email"
              required="true"
              class="form-control"
              id="email"
              placeholder="Votre email"
            />
          </div>
          <textarea
            className="form"
            style={{ fontSize: "20px", fontWeight: "lighter" }}
            onChange={this.change}
            class="form-control"
            id="message"
            rows="3"
            placeholder="Tapez votre message ici..."
          ></textarea>
          <button
            onClick={() =>
              this.state.email && this.state.name && this.state.message
                ? this.setState({ isSent: true })
                : alert("vous devez remplir tout les champs")
            }
            style={{
              padding: "15px 30px 15px 30px",
            }}
            type="button"
            class="btn-light btn"
          >
            Envoyer le message
          </button>
        </form>
        <div className="message_succes">
          {this.state.isSent && (
            <p style={{ color: "#5C48D3" }}>
              <FontAwesomeIcon
                style={{
                  marginRight: 15,
                }}
                icon={faPaperPlane}
                color="#5C48D3"
              ></FontAwesomeIcon>
              Merci beaucoup ! À très vite !
            </p>
          )}
        </div>
      </div>
    );
  }
}
