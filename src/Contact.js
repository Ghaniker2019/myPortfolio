import React, { Component } from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios"


export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    isSent: false,
    isLoading: false
  };
  change = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("Name", this.state.name);
    data.append("Emaile", this.state.email);
    data.append("Message", this.state.message);
    this.setState({ isLoading: true })
    axios({
      method: "post",
      // url: "https://hooks.zapier.com/hooks/catch/1125328/opia3i7/",
      url: "https://enqjdk9tlbly2w.m.pipedream.net",
      data: data,
      header: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      // receive two    parameter endpoint url ,form data
    })
      .then((res) => {
        // then print response status
        console.log(res);
        this.setState({ isSent: true });
        this.setState({ isLoading: false })
      })
      .catch((e) => {
        console.log(e);
        this.setState({ isLoading: false })
      });
  };

  render() {

    return (
      <div className="container-form">
        <p style={{ fontSize: "20px", fontWeight: "lighter" }}>
          Vous souhaitez me contacter ? <br />
          C'est parti !
        </p>
        <form onSubmit={this.handleSubmit} className="form">
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
              required
            />
          </div>
          <div class="form-group">
            <input
              className="form"
              style={{ fontSize: "20px", fontWeight: "lighter" }}
              onChange={this.change}
              type="email"
              required
              class="form-control"
              id="email"
              placeholder="Votre email"

            />
          </div>
          <textarea
            className="form"
            style={{ fontSize: "20px", fontWeight: "lighter" }}
            onChange={this.change}
            required
            class="form-control"
            id="message"
            rows="3"
            placeholder="Tapez votre message ici..."
          ></textarea>
          <button disabled={this.state.isSent || this.state.isLoading} type="submit" class="btn-purpel btn">
            Envoyer le message
          </button>
        </form>
        <div className="message_succes">
          {this.state.isSent && !this.state.isLoading && (
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
