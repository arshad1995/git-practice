import React, { Component } from "react";
import Signin from "./Signin";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signin
          src={"https://vcet.co/wp-content/uploads/2018/08/GOOGLE-1300x730.jpg"}
        />
      </div>
    );
  }
}

export default App;
