import React from "react";
import InvestmentFilter from "./InvestmentFilter";
import SubscriptionFilter from "./SubscriptionFilter";
import VolatilityFilter from "./VolatilityFilter";
import InvStrategyFilter from "./InvStrategyFilter";
import ClearAll from "./ClearAll";
import { buttonList,radioList} from '../../public/data/lists'

export const Filter = ({
  filterCount,
  subscription,
  handleSubscription,
  handleAmount,
  amount,
  handleVolatility,
  volatilities,
  newSmallCase,
  investment,
  investmentStrategySet,
  hanldeInvestment,
  handleNewSmallCase,
  handleClearAll
}) => {


  return (
    <div className="mr-6 w-1/4">
      <div className="flex justify-between items-center py-4 mt-6 mb-4">
        <div>
          Filter
          <span className="px-2 py-1 bg-[rgb(231,233,234)] ml-2 rounded-sm">
            {filterCount}
          </span>
        </div>
        <ClearAll
        handleClearAll={handleClearAll}
        />
      </div>

      <section className="flex flex-col mb-6">
        <h3 className="mb-3 text-[rgb(83,91,98)] font-extrabold">
          Subscription Type
        </h3>
        <div className="flex">
          {buttonList.map((button) => (
            <SubscriptionFilter
            key={button}
              handleSubscription={handleSubscription}
              subscription={subscription}
              button={button}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col mb-6">
        <h3 className="mb-3 text-[rgb(83,91,98)] font-extrabold">
          Investement Amount
        </h3>
        <div className="flex flex-col">
          {radioList.map((button, index) => (
            <InvestmentFilter
              key={index} 
              button={button}
              handleAmount={handleAmount}
              amount={amount}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col mb-6">
        <h3 className="mb-3 text-[rgb(83,91,98)] font-extrabold">Volatility</h3>
        <VolatilityFilter
          volatilities={volatilities}
          handleVolatility={handleVolatility}
        />
      </section>

      <section className="flex flex-col mb-6">
        <h1 className="mb-3 text-[rgb(83,91,98)] font-extrabold">
          Launch Date
        </h1>
        <label htmlFor="launch" className="flex items-center">
          <input
            type="checkbox"
            id="launch"
            className="mr-1"
            checked={newSmallCase}
            onChange={handleNewSmallCase}
          ></input>
          Include new smallcases
        </label>
      </section>

      <section className="flex flex-col gap-2">
        <h1 className="mb-3 text-[rgb(83,91,98)] font-extrabold">
          Investment Strategy
        </h1>

        {investmentStrategySet.map((strategy) => {
          return (
            <InvStrategyFilter
            investment={investment}
            key={strategy}
              strategy={strategy}
              hanldeInvestment={hanldeInvestment}
            />
          );
        })}
      </section>
    </div>
  );
};
