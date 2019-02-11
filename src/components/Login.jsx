import React, { Component } from "react";
// import * as ReactBootstrap from 'react-bootstrap';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "../css/Login.css";
import { userService } from "../services/user";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    console.log(this.state);
    event.preventDefault();
    const { username, password } = this.state;
    userService.login(username, password);
    this.props.userHasAuthenticated(true);
    this.props.history.push("/user_notes");
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            Email<br/>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            Password<br/>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            align="center"
            className="btn btn-primary"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
