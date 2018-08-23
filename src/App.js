import React, { Component } from "react";
import logo from "./logo.svg";
import Button from "./shared/Button";
import Card from "./shared/Card";
import Main from "./components/Main";
import Fav from "./components/Fav";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listView: false
    };
  }
  setView(param) {
    this.setState({
      listView: param
    });
  }
  render() {
    return (
      <div>
        <div className="app-button-container">
          <Button onSubmit={() => this.setView(false)}> Home </Button>
          <Button onSubmit={() => this.setView(true)}> Fav </Button>
        </div>
        {this.state.listView ? <Fav /> : <Main />}
      </div>
    );
  }
}

export default App;
