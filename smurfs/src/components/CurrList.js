import React, { useContext } from "react";
import smurfContext from "../contexts/smurfContext.js";
import Smurf from "./Smurf";

const CurrList = () => {
  const { smurfList } = useContext(smurfContext);
  return (
    <div className="smurfCrew">
      {smurfList.map(cv => {
        return <Smurf value={cv} key={cv.id} />;
      })}
    </div>
  );
};

export default CurrList;