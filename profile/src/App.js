import React, { Component } from "react";
import "./app.css";
import Form from "./form";

class App extends Component {
  state = {
    starwarsPeople: []
  };

  componentDidMount() {
    console.log("Component mounted successfully!!");
    fetch("https://swapi.co/api/people/")
      .then(data => data.json())
      .then(datajson => this.setState({ starwarsPeople: datajson.results }))
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div>
        <div>
          {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <img
          className="img"
          src="https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        />
        <img
          className="img2"
          src="https://avatars1.githubusercontent.com/u/21080254?s=460&v=4"
        />
        <ul className="div">
          <li>Salman Khan</li>
          <li>Software Developer</li>
        </ul>
        <a href="#" class="fa fa-twitter" />
        <a href="#" class="fa fa-google" />
        <a href="#" class="fa fa-instagram" />
        <div class="content">
          <a href="#" className="home">
            {" "}
            HOME
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </a>
          <a href="#" className="about">
            {" "}
            ABOUT{" "}
          </a>

          <a href="#" className="service">
            SERVICE{" "}
          </a>

          <a href="#" className="faq">
            FAQ
          </a>

          <a href="#" className="contact">
            {" "}
            CONTACT
          </a>
        </div>

        <Form /> */}
        </div>
        <div>
          <p>Introduction to APIs</p>
          {this.state.starwarsPeople.map(person => console.log(person.name))}
        </div>
      </div>
    );
  }
}
export default App;
