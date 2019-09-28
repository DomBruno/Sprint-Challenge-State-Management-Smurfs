import React, { useState, useReducer } from "react";

import { smurfReducer, initialState } from "../reducers/smurfReducer";

const Smurf = () => {
    const [state, dispatch] = useReducer(titleReducer, initialTitleState);

    return (
        <div>
            {state.name}
            {state.height}
            {state.age}
        </div>
    )

}