import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
          <form>
            <h3>Sign In</h3>

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

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button id="submit" type="submit" className="submit btn btn-primary btn-block">
              Submit
            </button>
            <p className="forgot-password text-right">
              <a href="/sign-up">Create Account</a>
            </p>
          </form>
        );
    }
}
