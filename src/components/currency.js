import React from "react";

const CURRENCY_LIST = {
  GBP: "£",
  EUR: "€",
  USD: "$"
};

const formatCurrency = (amount, type, selection = "GBP") => {
  return `${CURRENCY_LIST[type] || CURRENCY_LIST["GBP"]}${amount / 100}`;
};

export default props => (
  <div>
    <strong>{formatCurrency(props.amount[0], props.amount[1])}</strong>
  </div>
);
