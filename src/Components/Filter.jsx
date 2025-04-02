import React from "react";
import InvestmentFilter from "./InvestmentFilter";
import SubscriptionFilter from "./SubscriptionFilter";
import VolatilityFilter from "./VolatilityFilter";
import InvStrategyFilter from "./InvStrategyFilter";
import FilterComponent from "./FilterComponent";
import NewScFilter from "./NewScFilter";
import FilterHeader from "./FilterHeader";

export const Filter = ({ filterCount, handlers, filters }) => {
  return (
    <div className="mr-6 w-1/4">
      <FilterHeader
        handleClearAll={handlers.handleClearAll}
        filterCount={filterCount}
      />
      <FilterComponent title="Subscription Type">
        <SubscriptionFilter
          handleSubscription={handlers.handleSubscription}
          subscription={filters.subscription}
        />
      </FilterComponent>

      <FilterComponent title="Investement Amount">
        <InvestmentFilter
          handleAmount={handlers.handleAmount}
          amount={filters.amount}
          flexDirection = 'flex-col'
        />
      </FilterComponent>

      <FilterComponent title="Volatility">
        <VolatilityFilter
          volatilities={filters.volatilities}
          handleVolatility={handlers.handleVolatility}
        />
      </FilterComponent>

      <FilterComponent title="Launch Date">
        <NewScFilter
          handleNewSmallCase={handlers.handleNewSmallCase}
          newSmallCase={filters.newSmallCase}
        />
      </FilterComponent>

      <FilterComponent title="Investment Strategy">
        <InvStrategyFilter
          investment={filters.investment}
          hanldeInvestment={handlers.hanldeInvestment}
        />
      </FilterComponent>
    </div>
  );
};
