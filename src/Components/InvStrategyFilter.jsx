import React from "react";
import { capitalizeFirstletter } from "../utils";
const InvStrategyFilter = ({ strategy, hanldeInvestment, investment }) => {
  return (
    <label className="px-2 py-1 flex strategys-center">
      <input
        type="checkbox"
        value={strategy}
        checked={investment.has(strategy) ? true : false}
        onChange={(e) => hanldeInvestment(e)}
        className="before: mr-1"
      ></input>
      {capitalizeFirstletter(strategy)}
    </label>
  );
};

export default InvStrategyFilter;
