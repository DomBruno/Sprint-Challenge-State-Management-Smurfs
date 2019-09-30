import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

import FormContext from "../contexts/formContext.js";
import SmurfContext from "../contexts/smurfContext.js";
import CurrList from "./CurrList";
import AddForm from "./AddForm";

const App = () => {
  const [smurfList, setSmurfList] = useState([]);
  const [formValue, setFormValue] = useState({
    name: "",
    age: "",
    height: "",
    id: ""
  });

  const handleChanges = event => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const newSmurf = event => {
    event.preventDefault();
    var smurfed = { ...formValue, id: Date.now() };
    axios
      .post("http://localhost:3333/smurfs", smurfed)
      .then(res => {
        setSmurfList(res.data);
        setFormValue({
          name: "",
          age: "",
          height: "",
          id: ""
        });
      })
      .catch(err => {
        console.log("Error", err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        setSmurfList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <smurfContext.Provider value={{ smurfList }}>
        <formContext.Provider value={{ formValue, handleChanges, newSmurf }}>
          <header>
            <h1>Welcome to our Town!</h1>
            <p>
              You can browse our list of resident Smurfs or move in yourself!
            </p>
          </header>
          <div className="sidebyside">
            <AddForm />
            <CurrList />
          </div>
        </formContext.Provider>
      </smurfContext.Provider>
    </div>
  );
};

export default App;