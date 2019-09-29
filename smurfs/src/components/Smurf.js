import React from "react";

const Smurf = props => {
  const currSmurf = props.value;
  return (
    <div className="smurf">
      <h1>{currSmurf.name}</h1>
      <p>Age: {currSmurf.age}</p>
      <p>Height: {currSmurf.height}</p>
    </div>
  );
};

export default Smurf;