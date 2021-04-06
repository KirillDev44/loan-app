import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { currencySettings } from "../../../settings/CurrencySettings";
import { Divider } from "@material-ui/core";
import { settings } from "../../../settings/LoanTypeSettings";
import "./results.scss";

export const Results = React.memo(({ isForModal }) => {
  const { currency, loanType, homePrice, downPayment, duration } = useSelector(
    (store) => store.formReducer
  );
  const [typeOfLoan, setTypeOfLoan] = useState({});
  const [currencyType, setCurrencyType] = useState({});

  useEffect(() => {
    if (currency)
      setCurrencyType(currencySettings.find((type) => type.name === currency));
  }, [currency]);

  useEffect(() => {
    if (loanType)
      setTypeOfLoan(settings.find((type) => type.loanType === loanType));
  }, [loanType]);

  const getDuration = useCallback(() => {
    if (duration) {
      return duration % 12 === 0
        ? `${duration / 12} years`
        : `${duration} month`;
    }
    return "0 month";
  }, [duration]);

  const getEstimatePayment = useCallback(() => {
    if (homePrice) {
      return Math.round(
        (((homePrice[0] - (homePrice[0] / 100) * downPayment[0]) /
          duration[0]) *
          (typeOfLoan.loanType * currencyType.coefficient)) /
          12
      );
    }
    return {};
  }, [homePrice, downPayment, duration, currencyType, typeOfLoan]);

  const valueClass = isForModal ? "results--value-modal" : "results--value";

  return (
    <div className="results">
      <Divider className="divider" />
      <p className="results--name">Estimate Payment</p>
      <div>
        <span className="results--payment">
          {`${currencyType.symbol} ${getEstimatePayment()}`}
        </span>
        <span className="payment-text">/month</span>
      </div>
      <Divider className="divider" />
      <p className="results--name">Loan amount</p>
      <p className={valueClass}>{`${currencyType.symbol} ${homePrice}`}</p>
      <Divider className="divider" />
      <p className="results--name">Down payment</p>
      <p className={valueClass}>{`${currencyType.symbol} ${
        (homePrice[0] / 100) * downPayment[0]
      }`}</p>
      <Divider className="divider" />
      <p className="results--name">Loan term</p>
      <p className={valueClass}>{getDuration()}</p>
      <Divider className="divider" />
      <p className="results--name">Property tax</p>
      <p className={valueClass}>{`${
        typeOfLoan.loanType * currencyType.coefficient
      }%/year`}</p>
      <Divider className="divider" />
    </div>
  );
});
