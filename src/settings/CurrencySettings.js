import { CURRENCY } from "../store/form/formReducer";

export const currencySettings = [
  {
    name: CURRENCY.USD,
    symbol: "$",
    coefficient: 1,
  },
  {
    name: CURRENCY.EUR,
    symbol: "€",
    coefficient: 0.8,
  },
  {
    name: CURRENCY.GBR,
    symbol: "£",
    coefficient: 0.5,
  },
];
