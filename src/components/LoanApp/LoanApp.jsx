import React from "react";
import { AppLabel } from "./AppLabel/AppLabel";
import { CalcForm } from "./CalcForm/CalcForm";
import { Results } from "./Results/Results";
import "./LoanApp.scss";

export const LoanApp = React.memo(() => {
  return (
    <div className="loan-app">
      <div className="loan-app--settings">
        <AppLabel labelName="New Loan Application" />
        <CalcForm />
      </div>
      <div className="loan-app--results">
        <Results />
      </div>
    </div>
  );
});
