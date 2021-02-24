import React, { Component } from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios"

const sgMail = require("@sendgrid/mail");

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    isSent: false,
    x: 0,
    y: 0,
  };

  componentDidMount() {
    sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);
  }

  setPropertyXY = (e) => {
    const el = e.target;
    this.setState({
      x: (e.clientX - el.offsetLeft) / el.offsetWidth,
      y: (e.clientY - el.offsetTop) / el.offsetHeight,
    });
    document.documentElement.style.setProperty("--wavecoord-x", this.state.x) &&
      document.documentElement.style.setProperty("--wavecoord-y", this.state.y);
  };
  change = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  // submit = (e) => {
  //   e.preventDefault();

  //   if (this.state.email && this.state.name && this.state.message) {
  //     // send email to gmail

  //     this.setState({ isSent: true });
  //   } else {
  //     alert("vous devez remplir tout les champs");
  //   }
  // };
  handleSubmit = (e) => {
    e.preventDefault();


    const data = new FormData();
    data.append("Name", this.state.name);
    data.append("Emaile", this.state.email);
    data.append("Message", this.state.message);
    // data.append("campaignsData", JSON.stringify(new Array (globalState.campaignsData))); 
    if (this.state.email && this.state.name && this.state.message) {
      // send email to gmail

      this.setState({ isSent: true });
    } else {
      alert("vous devez remplir tout les champs");
    }


    axios({
      method: "post",
      // url: "https://hooks.zapier.com/hooks/catch/1125328/opia3i7/",
      url: "https://hooks.zapier.com/hooks/catch/1125328/on6znrg/",
      data: data,
      header: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data;charset=utf-32"
      },
      // receive two    parameter endpoint url ,form data
    })
      .then((res) => {
        // then print response status
        console.log(res.statusText);



      })
      .catch((e) => {
        console.log(e);
      });
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
          <button onClick={this.handleSubmit} type="button" class="btn-purpel btn">
            Envoyer le message
          </button>
        </form>
        <div className="message_succes">
          {this.state.isSent && (
            <p style={{ color: "#3f76d4" }}>
              <FontAwesomeIcon
                style={{
                  marginRight: 15,
                }}
                icon={faPaperPlane}
                color="#3f76d4"
              ></FontAwesomeIcon>
              Merci beaucoup ! À très vite !
            </p>
          )}
        </div>
      </div>
    );
  }
}
