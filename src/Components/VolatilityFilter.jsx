import React from 'react'
import low from "../assets/icons/Low.png";
import medium from "../assets/icons/2.png";
import high from "../assets/icons/3.png";

const VolatilityFilter = ({volatilities,handleVolatility}) => {
  console.log(volatilities);
  
  return (
    <div className="flex gap-1">
          <label
            className={
              "rounded-sm " + (volatilities.includes("Low Volatility") ? "border-2 border-[rgb(31,122,224)]" : "")
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
              "rounded-sm " + (volatilities.includes("Medium Volatility") ? "border-2 border-[rgb(31,122,224)]" : "")
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
              "rounded-sm " + (volatilities.includes("High Volatility") ? "border-2 border-[rgb(31,122,224)]" : "")
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
  )
}

export default VolatilityFilter
