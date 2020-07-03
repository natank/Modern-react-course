import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from './SearchBar'

class App extends Component {
  constructor() {
    super();

  }

  render() {
    return pug`
      div
        SearchBar
    `
  }
}

export default App;

