import React, { Component } from "react";
import "./App.css";

import { smurfContext } from '../src/contexts/smurfContext';

class App extends Component {
  render() {
    return (
      <smurfContext.provider value={Smurfs}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
      </smurfContext.provider>
    );
  }
}

export default App;
