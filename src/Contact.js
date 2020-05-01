import React, { Component } from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const sgMail = require("@sendgrid/mail");

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    isSent: false,
  };
  componentDidMount() {
    sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);
  }
  change = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  submit = (e) => {
    e.preventDefault();
    console.log("<============onSubmit");
    console.log(process.env.REACT_APP_SENDGRID_API_KEY);
    if (this.state.email && this.state.name && this.state.message) {
      // send email to gmail

      const MSG = {
        to: "kerkoub.abdelghani@gmail.com",
        from: "anismzane@gmail.com",
        subject: "New Lead",
        text: " ",
        html:
          '<div style="text-align:center;font-size:22px">' +
          "<h2>You have received a new lead!</h2>" +
          "</div>",
      };
      this.setState({ isSent: true }, () => sgMail.send(MSG));
    } else {
      alert("vous devez remplir tout les champs");
    }
  };
  render() {
    return (
      <div>
        <p style={{ fontSize: "20px", fontWeight: "lighter" }}>
          Vous souhaitez me contacter ? <br />
          C'est parti !
        </p>
        <form className="form">
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
          <button onClick={this.submit} type="button" class="btn-purpel btn">
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
