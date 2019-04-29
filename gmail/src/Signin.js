import React, { Component } from "react";
import "./signin.css";
class Signin extends Component {
  state = {
    userName: "",
    fieldset: false,
    name: "Email or password"
  };
  submit = () => {
    alert("WELCOME" + " " + this.state.userName);
  };
  fieldset = () => {
    this.setState({ fieldset: !this.state.fieldset });
  };

  render() {
    return (
      <div className="sign">
        <img className="google" src={this.props.src} />
        <p className="log">Sign in</p>
        {this.state.fieldset ? (
          <p>
            {
              <fieldset className="field" onClick={this.fieldset}>
                <legend>{this.state.name}</legend>
              </fieldset>
            }
          </p>
        ) : (
          <p>
            {
              <input
                className="input"
                type="text"
                onChange={a => this.setState({ userName: a.target.value })}
                onClick={this.fieldset}
                placeholder={this.state.name}
              />
            }
          </p>
        )}

        <p className="p1">Forgot email?</p>
        <p className="p2">
          Not your computer? Use Guest mode to sign in privately.
        </p>
        <p className="p3"> Learn more</p>
        <div>
          <p className="p4">Create account</p>
          <button onClick={this.submit} className="submit">
            Next
          </button>
        </div>
      </div>
    );
  }
}
export default Signin;
