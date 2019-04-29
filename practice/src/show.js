import React, { Component } from "react";

class Show extends Component {
state = {
content: "Arshad",
isVisible: false,
buttonLabel: "Show Content"
};

showContent = () => {
this.setState({ isVisible: !this.state.isVisible });
if (!this.state.isVisible) {
this.setState({ buttonLabel: "Hide Content" });
} else {
this.setState({ buttonLabel: "Show Content" });
}
};

render() {
return (
<div>
<button onClick={this.showContent}>{this.state.buttonLabel}</button>
{this.state.isVisible ? <p>{this.state.content}</p> : ""}
</div>
);
}
}

// visible true --> wo dikhana
// visibler false --> ""

export default Show;