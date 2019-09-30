import React, { useContext } from "react";
import formContext from "../contexts/formContext";

const AddForm = () => {
  const { formValue, handleChanges, newSmurf } = useContext(formContext);
  return (
      <form onSubmit={newSmurf}>
          <p>Fill out the following info to register in the Smurf Village</p>
          <label htmlFor="name">Name?</label>
          <input type="text" name="name" value={formValue.name} placeholder="Smurfy McSmurf-Face" onChange={handleChanges} />
          <label htmlFor="age">Age?</label>
          <input type="text" name="age" value={formValue.age} placeholder="42" onChange={handleChanges} />
          <label htmlFor="height">Height</label>
          <input type="text" name="height" value={formValue.height} placeholder="10cm" onChange={handleChanges} />
          <button type="submit">Register</button>
      </form>
  )
};

export default AddForm;