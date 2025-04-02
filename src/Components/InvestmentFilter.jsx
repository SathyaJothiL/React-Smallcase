import React from "react";
import { radioListName, radioList } from "../../public/data/lists";

const InvestmentFilter = ({ handleAmount, amount, index }) => {
  return (
    <div className="flex flex-col">
      {radioList.map((button, index) => (
        <div className="px-2 py-1 mb-1" key={index}>
          <input
            id={button}
            type="radio"
            value={button}
            onChange={(e) => handleAmount(e)}
            checked={button === amount ? true : false}
            className={
              " border border-black mr-1 " +
              (amount === button ? "bg-pink-300" : "")
            }
          ></input>
          <label htmlFor={button}>{radioListName[index]}</label>
        </div>
      ))}
    </div>
  );
};

export default InvestmentFilter;
