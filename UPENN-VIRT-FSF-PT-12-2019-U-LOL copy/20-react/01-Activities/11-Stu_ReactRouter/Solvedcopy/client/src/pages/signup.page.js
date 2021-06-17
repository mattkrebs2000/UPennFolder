import React, { Component } from "react";
import API from "../util/API";

// import { Link } from "react-router-dom";


class signup extends Component {

  state = {
firstname:"matt",
lastname: "k",
email: "mattK@gmail.com",
password: "aaaaaaaa"
  }
  
    loadUsers = () => {
    API.getUsers()
      .then((res) =>
        this.setState({
          user: res.data,
          firstname: "w",
          lastname: "w",
          email: "w",
          password: "w"
        })
      )
      .catch((err) => console.log(err));
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (1+1===2) {
      API.saveUser({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
      })
        .then((res) => this.loadUsers())
       
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="firstname form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            className="lastname form-control"
            placeholder="Last name"
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="email form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="password form-control"
            placeholder="Enter password"
          />
        </div>

        <button
          type="submit"
          className="submit btn btn-primary btn-block"
          onClick={this.handleFormSubmit}
        >
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered? <a href="/sign-in">sign in</a>
        </p>
      </form>
    );
  }
}
export default signup;
