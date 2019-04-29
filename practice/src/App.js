import React, { Component } from "react";
import Card from "./card";
import Btn from "./Btn";
import Show from "./show";

//console.log(favmov.prdn);
class App extends Component {
  state;
  render() {
    // const { name, age, favmov } = this.state.person1;
    return (
      <div>
        <Card
          src={
            "https://www.hydrofert.it/wp-content/uploads/2016/12/plant-259806_1280.jpg"
          }
          name={"arshad"}
          age={24}
          Ed={"BE"}
        />

        <Card
          src={"https://avatars0.githubusercontent.com/u/21080254?s=400&v=4"}
          name={"salman"}
          age={24}
          Ed={"BE"}
        />

        <Card
          src={"https://avatars1.githubusercontent.com/u/9709464?s=400&v=4"}
          name={"tajamul"}
          age={25}
          Ed={"BE"}
        />
      </div>
    );
  }
}

export default App;
