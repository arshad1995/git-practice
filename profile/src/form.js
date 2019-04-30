import React, { Component } from "react";
import "./form.css";

class Form extends Component {
  render() {
    return (
      <div class="container">
        <h1>Login</h1>

        <label for="email">
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Email" name="email" required />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button type="submit" class="btn">
          Login
        </button>
      </div>
    );
  }
}
export default Form;
