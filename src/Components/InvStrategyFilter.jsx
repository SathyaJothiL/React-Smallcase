import React from "react";
import { capitalizeFirstletter } from "../utils";
import { investmentStrategySet } from "../../public/data/lists";
const InvStrategyFilter = ({ hanldeInvestment, investment }) => {
  return (
    <div className="flex flex-col">
      {investmentStrategySet.map((strategy) => (
        <label className="px-2 py-1 flex strategys-center" key={strategy}>
          <input
            type="checkbox"
            value={strategy}
            checked={investment.has(strategy) ? true : false}
            onChange={(e) => hanldeInvestment(e)}
            className="before: mr-1"
          ></input>
          {capitalizeFirstletter(strategy)}
        </label>
      ))}
    </div>
  );
};

export default InvStrategyFilter;
