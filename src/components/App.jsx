import React from "react";
import { Form } from "./form";
import { Greeting } from "./greeting";
class App extends React.Component {
  state = {
    username: "",
    name: "Register Your Free Account",
    islogged: false,
    isRegistered: false,
    password: "",
    hour: new Date().getHours(),
    type: ["Registered", "Login"],
    canRegistered: false,
    condition: false,
    check: true,
  };
  setName = (value) => {
    if (!this.state.isRegistered) {
      this.setState({ name: `Hello ${value}  `, username: `${value}` });
    } else {
      this.setState({ name: `Hello ${value}  ` });
    }
  };
  logged = (type) => {
    if (this.state.canRegistered) {
      this.setState({
        condition: +type,
        name: ` You Registered Successfully `,
        isRegistered: true,
        canRegistered: false,
      });
    } else {
      this.setState({ name: `OOPS!! Something wents Wrong` });
    }

    if (
      this.state.isRegistered &&
      document.querySelector(".pass").value === this.state.password &&
      document.querySelector(".name").value === this.state.username.trim()
    ) {
      this.setState({ islogged: true, name: `Hello ${this.state.username}` });
    }
    this.resetInput();
  };
  resetInput() {
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  }
  checkValidity(value) {
    if (value === this.state.password) {
      this.setState({ canRegistered: true });
    } else {
      this.setState({ canRegistered: false });
    }
  }
  password = (value, check = false) => {
    if (check) {
      this.checkValidity(value);
    } else if (!check && !this.state.isRegistered) {
      this.setState({ password: value });
    }
  };
  render() {
    return (
      <div className="container">
        <h1>{this.state.name}</h1>
        {this.state.islogged ? (
          <Greeting hour={this.state.hour} />
        ) : (
          <Form
            handler={this.setName}
            logged={this.logged}
            password={this.password}
            data={this.state}
          />
        )}
      </div>
    );
  }
}
export default App;
