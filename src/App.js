import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "React Simple CRUD Application",
      act: 0,
      index: "",
      datas: []
    };
  }

  componentDidMount() {
    //this.refs.name.focus();
  }

  fSubmit = (e) => {
    e.preventDefault();
    console.log("try");

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;

    let data = {
      name,
      address
    };
    datas.push(data);

    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  };

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({
      datas: datas
    });
    this.refs.myForm.reset();
    this.refs.name.focus();
  };

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input
            type="text"
            ref="name"
            placeholder="your name"
            className="formField"
          />
          <input
            type="text"
            ref="address"
            placeholder="your address"
            className="formField"
          />
          <button onClick={(e) => this.fSubmit(e)} className="myButton">
            Submit
          </button>
        </form>
        <pre>
          {datas.map((data, i) => (
            <li key={i} className="myList">
              {i + 1}. {data.name}, {data.address}
              <button onClick={(e) => this.fRemove(i)} className="myButton">
                Remove
              </button>
              <button onClick={(e) => this.fEdit(i)} className="myButton">
                Edit
              </button>
            </li>
          ))}
        </pre>
      </div>
    );
  }
}

export default App;
