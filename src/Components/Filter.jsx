import React from "react";
import low from "../assets/icons/Low.png";
import medium from "../assets/icons/2.png";
import high from "../assets/icons/3.png";

export const Filter = ({
  subscription,
  handleSubscription,
  handleAmount,
  amount,
  handleVolatility,
  volatality,
  investmentStrategySet,
  setInvestment,
  investment,
  hanldeInvestment,
  handleNewSmallCase
}) => {
  // console.log(volatality);
  // console.log(investmentStrategySet);
  const buttonList = ["Show All", "Free Access", "Fee Based"];
  const radioList = ["any", "5000", "25000", "50000"];
  const radioListName = [
    "Any",
    "Under ₹ 5,000",
    "Under ₹ 25,000",
    "Under ₹ 5,0000",
  ];

  return (
    <div className="mr-6 w-1/4">
      <div className="flex justify-between items-center py-4 mt-6 mb-4">
        <div>
          Filter
          <span className="px-2 py-1 bg-[rgb(231,233,234)] ml-2 rounded-sm">
            0
          </span>
        </div>
      </div>
      <section className="flex flex-col mb-6">
        <h3 className="mb-3 text-[rgb(83,91,98)] font-extrabold">
          Subscription Type
        </h3>
        <div className="flex">
          {buttonList.map((button) => (
            <button
              key={button}
              value={button}
              onClick={(e) => handleSubscription(e)}
              className={
                "px-5 font-bold flex-1 " +
                (subscription === button
                  ? "text-[rgb(31,122,224)] bg-[rgba(31,122,224,0.1)]"
                  : "text-[rgb(129,135,140)]")
              }
            >
              <span className="break-words whitespace-normal">{button}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="flex flex-col mb-6">
        <h3 className="mb-3 text-[rgb(83,91,98)] font-extrabold">
          Investement Amount
        </h3>
        <div className="flex flex-col">
          {radioList.map((button, index) => (
            <div className="px-2 py-1 mb-1" key={index}>
              <input
                id={button}
                type="radio"
                value={button}
                onChange={(e) => handleAmount(e)}
                checked={button===amount ? true : false}
                className={
                  " border border-black " +
                  (amount === button ? "bg-pink-300" : "")
                }
              ></input>
              <label htmlFor={button}>{radioListName[index]}</label>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col mb-6">
        <h3 className="mb-3 text-[rgb(83,91,98)] font-extrabold">Volatility</h3>
        <div className="flex gap-1">
          <label
            className={
              "rounded-sm " + (volatality.includes("Low Volatility") ? "border-2 border-[rgb(31,122,224)]" : "")
            }
          >
            <input
              type="checkbox"
              value="Low Volatility"
              onChange={(e) => handleVolatility(e)}
              className="hidden"
            ></input>
            <div className="flex flex-col px-2 m-1 justify-center items-center">
              <img src={low} className="w-10 h-10"></img>
              <p>Low</p>
            </div>
          </label>
          <label
            className={
              "rounded-sm " + (volatality.includes("Medium Volatility") ? "border-2 border-[rgb(31,122,224)]" : "")
            }
          >
            <input
              type="checkbox"
              value="Medium Volatility"
              onChange={(e) => handleVolatility(e)}
              className="hidden"
            ></input>
            <div className="flex flex-col px-2 m-1 justify-center items-center">
              <img src={medium} className="w-10 h-10"></img>
              <p>medium</p>
            </div>
          </label>
          <label
            className={
              "rounded-sm " + (volatality.includes("High Volatility") ? "border-2 border-[rgb(31,122,224)]" : "")
            }
          >
            <input
              type="checkbox"
              value="High Volatility"
              onChange={(e) => handleVolatility(e)}
              className="hidden"
            ></input>
            <div className="flex flex-col px-2 m-1 justify-center items-center">
              <img src={high} className="w-10 h-10"></img>
              <p>High</p>
            </div>
          </label>
        </div>
      </section>

      <section className="flex flex-col mb-6">
        <h1 className="mb-3 text-[rgb(83,91,98)] font-extrabold">
          Launch Date
        </h1>
        <label htmlFor="launch" className="flex items-center">
          <input type="checkbox" id="launch" className="mr-1" onChange={handleNewSmallCase}></input>
          Include new smallcases
        </label>
      </section>

      <section className="flex flex-col gap-2">
        <h1 className="mb-3 text-[rgb(83,91,98)] font-extrabold">
          Investment Strategy
        </h1>

        {investmentStrategySet.map((item) => {
          return (
            <label className="px-2 py-1 flex items-center" key={item}>
              <input
                type="checkbox"
                value={item}
                onChange={(e) => hanldeInvestment(e)}
                className="before: mr-1"
              ></input>
              {item}
            </label>
          );
        })}
      </section>
    </div>
  );
};
