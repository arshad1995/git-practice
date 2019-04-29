import React, { Component } from "react";
import "./card.css";
class Btn extends Component {
  state = {
    details: ""
  };
  change = () => {
    this.setState({ details: "welcome" });
  };
  render() {
    return (
      <div>
        <p>{this.state.details}</p>
        <button onClick={this.change} className="chng">
          Click
        </button>
      </div>
    );
  }
}
export default Btn;
