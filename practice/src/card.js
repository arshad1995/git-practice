import React, { Component } from "react";
import "./card.css";
class Card extends Component {
  state = {
    show: false
  };
  show = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div className="design">
        Name: {this.props.name}
        <br />
        Age: {this.props.age}
        <br />
        Ed:{this.props.Ed}
        <br />
        <img src={this.props.src} />
        <button onClick={this.show}>Click!</button>
        {this.state.show ? <p>{this.props.name}</p> : ""}
      </div>
    );
  }
}
export default Card;
