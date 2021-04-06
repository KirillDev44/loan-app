import { SET_DATA, SET_FORM_DATA } from "./formTypes";

export const CURRENCY = {
  USD: "USD",
  EUR: "EUR",
  GBR: "GBR",
};

const initialState = {
  currency: CURRENCY.USD,
  loanType: 15,
  homePrice: [50000],
  downPayment: [50],
  duration: [24],
  data: null,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_DATA:
      return { ...state, [action.data.name]: action.data.value };
    case SET_DATA:
      return { ...state, data: action.data };
    default:
      return state;
  }
};

export default formReducer;
