import React, { useContext } from "react";
import SmurfContext from "../contexts/smurfContext.js";
import Smurf from "./Smurf";

const CurrList = () => {
  const { smurfList } = useContext(smurfContext);
  return (
    <div className="smurfVillage">
      {smurfList.map(cv => {
        return <Smurf value={cv} key={cv.id} />;
      })}
    </div>
  );
};

export default SmurfList;