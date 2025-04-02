import React from "react";
import { useState } from "react";
import { Filter } from "./Filter";
import SmallCaseBody from "./SmallCaseBody";
import Message from "./Message";
import DiscoverNavbar from "./DiscoverNavbar";
import smallCaseData from "../../public/data/smallcaseData";
import { investmentStrategySet } from "../../public/data/lists";

import { getList } from "../utils";
import {
  getSorterLists,
  getReturnsLists,
  calculateFilterCount,
} from "../utils";

const SmallCases = () => {
  const [subscription, setSubscription] = useState("Show All");
  const [amount, setAmount] = useState("any");
  let lists = smallCaseData
  const [volatilities, setVolatility] = useState(new Set());

  const [investment, setInvestment] = useState(new Set());
  const [newSmallCase, setNewSmallCase] = useState(false);
  const [sorter, setSorter] = useState(null);
  const [returns, setReturns] = useState(null);
  const [order, setOrder] = useState(null);

  const filters = {
    subscription: subscription,
    amount: amount,
    volatilities: volatilities,
    investment: investment,
    newSmallCase: newSmallCase,
  };
  let filterCount = calculateFilterCount({ ...filters });

  lists = getList({ ...filters, smallCaseData: smallCaseData });

  function handleSubscription(e) {
    setSubscription(e.target.textContent);
  }

  function handleAmount(e) {
    setAmount(e.target.value);
  }

  function handleVolatility(e) {
    let inputValue = e.target.value;
    console.log("hi");
    let newVolatility = new Set(volatilities);
    if (volatilities.has(inputValue)) {
      newVolatility.delete(inputValue);
    } else {
      newVolatility.add(inputValue);
    }
    setVolatility(newVolatility);
  }

  function handleNewSmallCase(e) {
    setNewSmallCase(!newSmallCase);
  }

  function hanldeInvestment(e) {
    let val = e.target.value;
    let newInvestment = new Set(investment);
    if (newInvestment.has(val)) {
      newInvestment.delete(val);
    } else {
      newInvestment.add(val);
    }
    setInvestment(newInvestment);
  }

  function handleSorter(e) {
    let sortName = e.target.value;
    setSorter(sortName);
    setReturns(null);
    setOrder(null);
  }

  function handleOrder(e) {
    let orderName = e.target.textContent;
    setOrder(orderName);
  }

  function handleReturns(e) {
    let returnsValue = e.target.textContent;
    setSorter(null);
    setReturns(returnsValue);
    if (order === null) {
      setOrder("High-Low");
    }
  }
  function handleClearAll() {
    setSubscription("Show All");
    setAmount("any");
    setLists(smallCaseData);
    setVolatility(new Set());
    setInvestment(new Set());
    setNewSmallCase(false);
  }

  const sorts = {
    sorter: sorter,
    returns: returns,
    order: order,
    lists: lists,
  };

  if (sorter) {
    lists = getSorterLists({ ...sorts });
  } else if (returns) {
    lists = getReturnsLists({ ...sorts });
  }
  const handlers = {
    handleSubscription: handleSubscription,
    handleAmount: handleAmount,
    handleVolatility: handleVolatility,
    hanldeInvestment: hanldeInvestment,
    handleNewSmallCase: handleNewSmallCase,
    handleClearAll: handleClearAll,
  };
  return (
    <>
      <DiscoverNavbar
        handleSorter={handleSorter}
        sorter={sorter}
        returns={returns}
        order={order}
        handleReturns={handleReturns}
        handleOrder={handleOrder}
      />
      <Message />
      <div className="flex w-full">
        <Filter
          filterCount={filterCount}
          filters={filters}
          handlers={handlers}
        />
        <SmallCaseBody
          lists={lists}
          returns={returns}
          handleClearAll={handleClearAll}
        />
      </div>
    </>
  );
};

export default SmallCases;
