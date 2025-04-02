import React from "react";
import low from "../assets/icons/Low.png";
import medium from "../assets/icons/2.png";
import high from "../assets/icons/3.png";

const VolatilityFilter = ({ volatilities, handleVolatility }) => {
  const volLists = [
    { name: "Low Volatility", src: low, iconName: "Low" },
    { name: "Medium Volatility", src: medium, iconName: "Medium" },
    { name: "High Volatility", src: high, iconName: "High" },
  ];
  return (
    <div className="flex gap-1">
      {volLists.map((vol, index) => (
        <label
          key={index}
          className={
            "rounded-sm " +
            (volatilities.has(vol.name)
              ? "border-2 border-[rgb(31,122,224)]"
              : "")
          }
        >
          <input
            type="checkbox"
            value={vol.name}
            onChange={(e) => handleVolatility(e)}
            className="hidden"
          ></input>
          <div className="flex flex-col px-2 m-1 justify-center items-center">
            <img src={vol.src} className="w-10 h-10"></img>
            <p>{vol.iconName}</p>
          </div>
        </label>
      ))}
    </div>
  );
};

export default VolatilityFilter;
