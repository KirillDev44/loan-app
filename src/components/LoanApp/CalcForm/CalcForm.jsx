import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData, setFormData } from "../../../store/form/formMutations";
import { CURRENCY } from "../../../store/form/formReducer";
import { sendOfferData } from "../../../store/form/formAction";
import { useStyles } from "../../../hooks/useStyles";
import { settings } from "../../../settings/LoanTypeSettings";
import { currencySettings } from "../../../settings/CurrencySettings";
import { FormSlider } from "./Slider/FormSlider";
import { Results } from "../Results/Results";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import "./calcForm.scss";

export const CalcForm = () => {
  const [typeOfLoan, setTypeOfLoan] = useState({});
  const [currencyType, setCurrencyType] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    currency,
    loanType,
    homePrice,
    downPayment,
    duration,
    data,
  } = useSelector((store) => store.formReducer);

  const closeModal = useCallback(() => {
    setOpenModal(false);
    dispatch(setData(null));
  }, [dispatch]);

  const onSubmit = useCallback(() => {
    dispatch(
      sendOfferData({
        homePrice,
        downPayment,
        loanType,
        duration,
        currencyType,
      })
    );
  }, [dispatch, homePrice, downPayment, loanType, currencyType, duration]);

  useEffect(() => {
    if (loanType)
      setTypeOfLoan(settings.find((type) => type.loanType === loanType));
  }, [loanType]);

  useEffect(() => {
    if (currency)
      setCurrencyType(currencySettings.find((type) => type.name === currency));
  }, [currency]);

  useEffect(() => {
    if (data) closeModal();
  }, [data, closeModal]);

  const handleChange = useCallback(
    (event) => {
      const { value, name } = event.target;
      dispatch(
        setFormData({
          value,
          name,
        })
      );
    },
    [dispatch]
  );
  const handleChangeCurrency = useCallback(
    (event, value) => {
      dispatch(
        setFormData({
          value,
          name: "currency",
        })
      );
    },
    [dispatch]
  );

  const handleChangeSlider = useCallback(
    (update) => {
      dispatch(
        setFormData({
          value: update,
          name: "homePrice",
        })
      );
    },
    [dispatch]
  );

  const handleChangeDownPayment = useCallback(
    (update) => {
      dispatch(
        setFormData({
          value: update,
          name: "downPayment",
        })
      );
    },
    [dispatch]
  );

  const handleChangeMonth = useCallback(
    (update) => {
      dispatch(
        setFormData({
          value: update,
          name: "duration",
        })
      );
    },
    [dispatch]
  );

  return (
    <div className="form">
      <div className="form--data">
        <FormControl className={classes.formControl}>
          <InputLabel shrink id="simple-select-placeholder-label-label">
            Type of loan
          </InputLabel>
          <Select
            labelId="simple-select-placeholder-label-label"
            id="simple-select-placeholder-label"
            value={loanType}
            onChange={handleChange}
            className={classes.selectEmpty}
            name="loanType"
          >
            {settings.map((type, id) => (
              <MenuItem key={id + 1} value={type.loanType}>
                {type.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className="form--currency">
          <Tabs
            value={currency}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChangeCurrency}
          >
            <Tab label="USD" value={CURRENCY.USD} />
            <Tab label="EUR" value={CURRENCY.EUR} />
            <Tab label="GBR" value={CURRENCY.GBR} />
          </Tabs>
        </div>
      </div>

      <Typography gutterBottom>Home Price</Typography>
      <div className="form--data">
        <FormSlider
          count={3}
          onHandleChange={handleChangeSlider}
          domain={typeOfLoan.homePrice}
          step={10000}
          value={homePrice}
        />
        <Paper variant="outlined">
          <Typography
            gutterBottom
          >{`${homePrice[0]} ${currencyType?.symbol}`}</Typography>
        </Paper>
      </div>
      <Typography
        gutterBottom
      >{`Down Payment (${downPayment[0]} %)`}</Typography>
      <div className="form--data">
        <FormSlider
          count={5}
          onHandleChange={handleChangeDownPayment}
          domain={[10, 100]}
          step={5}
          value={downPayment}
        />
        <Paper variant="outlined">
          <Typography gutterBottom>{`${(homePrice[0] / 100) * downPayment[0]} ${
            currencyType?.symbol
          }`}</Typography>
        </Paper>
      </div>
      <Typography gutterBottom>Duration in Months</Typography>
      <div className="form--data">
        <FormSlider
          count={3}
          onHandleChange={handleChangeMonth}
          domain={typeOfLoan.duration}
          step={1}
          value={duration}
        />
        <Paper variant="outlined">
          <Typography gutterBottom>{`${duration} month`}</Typography>
        </Paper>
      </div>
      <div className="form--button">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpenModal(true)}
        >
          GET REAL MORTGAGE OFFER
        </Button>
      </div>
      <p className="form--text">
        Not looking for a loan? You`re a service provider? (bank, notary,
        appraiser, loan officer, etc.) <span>sing up here</span>
      </p>
      <Dialog
        open={openModal}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Please, check your data and submit
        </DialogTitle>
        <DialogContent>
          <Results isForModal={true} />
        </DialogContent>
        <DialogActions className="dialog-button">
          <div className="form--button">
            <Button onClick={closeModal} variant="contained" color="primary">
              Cancel
            </Button>
          </div>
          <div className="form--button">
            <Button onClick={onSubmit} variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};
