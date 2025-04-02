import React from "react";
import { useState } from "react";
import smallCaseList from "../../smallcases.json";
import { Filter } from "./Filter";
import SmallCaseBody from "./SmallCaseBody";
import Sorters from "./Sorters";
import Message from "./Message";
import DiscoverNavbar from "../Components/DiscoverNavbar";

import { getList } from "../utils";
import { getSorterLists, getReturnsLists } from "../utils";

const SmallCases = () => {
  const [subscription, setSubscription] = useState("Show All");

  const [amount, setAmount] = useState("any");
  let smallCaseData = smallCaseList["data"];
  const [lists, setLists] = useState(smallCaseData);

  const [volatilities, setVolatility] = useState([]);

  const investmentStrategyList = smallCaseData.map((item) => {
    let temp = item.info.investmentStrategy;
    let t = temp.map((item) => item.key);
    return t;
  });
  const investmentStrategySet = new Set(investmentStrategyList.flat());

  const [investment, setInvestment] = useState([]);
  const [newSmallCase, setNewSmallCase] = useState(false);
  const [sorter, setSorter] = useState(null);
  const [returns, setReturns] = useState(null);
  const [order, setOrder] = useState(null);

  const filters = {
    subscription: subscription,
    amount: amount,
    volatilities: volatilities,
    investment: investment,
    smallCaseData: smallCaseData,
    setLists: setLists,
  };

  function handleSubscription(e) {
    setSubscription(e.target.textContent);
    getList({
      sub: e.target.textContent,
      ...filters,
    });
  }

  function handleAmount(e) {
    setAmount(e.target.value);
    getList({
      amounts: e.target.value,
      ...filters,
    });
  }

  function handleVolatility(e) {
    let inputValue = e.target.value;
    if (volatilities.includes(inputValue)) {
      let filterVolatility = volatilities.filter(
        (volatility) => volatility !== inputValue
      );
      getList({
        volatility: [...filterVolatility],
        ...filters,
      });
      setVolatility(filterVolatility);
      return;
    }
    let newVolatility = [...volatilities, inputValue];
    getList({
      volatility: newVolatility,
      ...filters,
    });
    setVolatility(newVolatility);
  }

  function handleNewSmallCase(e) {
    setNewSmallCase(e.target.checked);
    getList({
      newsc: e.target.checked,
      ...filters,
    });
  }

  function hanldeInvestment(e) {
    let val = e.target.value;

    if (investment.includes(val)) {
      let filteredLists = investment.filter((item) => item !== val);
      getList({
        investments: [...filteredLists],
        ...filters,
      });
      setInvestment(filteredLists);
      return;
    }

    let newInvestment = [...investment, val];
    getList({
      investments: newInvestment,
      ...filters,
    });
    setInvestment(newInvestment);
  }

  function handleSorter(e) {
    let sortName = e.target.value;
    setSorter(e.target.value);
    getSorterLists({ sortName: sortName, lists: lists });
    setReturns(null);
    setOrder(null);
  }

  function handleOrder(e) {
    let orderName = e.target.textContent;
    setOrder(orderName);
    getReturnsLists({
      returnsValue: returns,
      orderName: orderName,
      lists: lists,
    });
  }

  function handleReturns(e) {
    let returnsValue = e.target.textContent;
    setSorter(null);
    setReturns(returnsValue);
    if (order === null) {
      setOrder("High-Low");
      getReturnsLists({
        returnsValue: returnsValue,
        orderName: "High-Low",
        lists: lists,
      });
    } else {
      getReturnsLists({
        returnsValue: returnsValue,
        orderName: order,
        lists: lists,
      });
    }
  }

  function handleClearAll() {
    setSubscription("Show All");
    setAmount("any");
    setLists(smallCaseData);
    setVolatility([]);
    setInvestment([]);
    setNewSmallCase(false);
  }
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
          subscription={subscription}
          handleSubscription={handleSubscription}
          handleAmount={handleAmount}
          amount={amount}
          handleVolatility={handleVolatility}
          volatilities={volatilities}
          investmentStrategySet={[...investmentStrategySet]}
          setInvestment={setInvestment}
          investment={investment}
          hanldeInvestment={hanldeInvestment}
          handleNewSmallCase={handleNewSmallCase}
          handleClearAll={handleClearAll}
        />
        <SmallCaseBody lists={lists} returns={returns} />
      </div>
    </>
  );
};

export default SmallCases;
