import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { smurfContext } from '../src/contexts/smurfContext';

ReactDOM.render(<smurfContext.provider value={smurf}><App /></smurfContext.provider>, document.getElementById("root"));
