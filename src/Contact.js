import React, { Component } from "react";
import "./contact.css";
export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  change = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  submit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <p>Vous souhaitez me contacter ? C'est parti !</p>
        <form onSubmit={this.submit} style={{ margin: "80px 30% 100px 30%" }}>
          <div class="form-group">
            <input
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
              onChange={this.change}
              type="email"
              class="form-control"
              id="email"
              placeholder="Votre email"
            />
          </div>
          <textarea
            onChange={this.change}
            class="form-control"
            id="message"
            rows="3"
            placeholder="Tapez votre message ici..."
          ></textarea>
          <button
            style={{ padding: "15px 30px 15px 30px" }}
            type="button"
            class="btn-light btn"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    );
  }
}
