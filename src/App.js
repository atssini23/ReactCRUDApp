import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "React Simple CRUD Application",
      act: 0,
      index: ""
    };
  }
  render() {
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form></form>
      </div>
    );
  }
}

export default App;
