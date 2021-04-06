import React from "react";
import "./AppLabel.scss";
import calc from "../../../common/calc.png";

export const AppLabel = React.memo(({ labelName }) => {
  return (
    <div className="app-label">
      <div className="app-label--calc">
        <img src={calc} alt="logo" />
      </div>
      <span className="app-label--name">{labelName}</span>
    </div>
  );
});
