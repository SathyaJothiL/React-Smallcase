import React from "react";
import { useState } from "react";
import smallCaseList from "../../smallcases.json";
import { Filter } from "./Filter";
import SmallCaseBody from "./SmallCaseBody";
import Sorters from "./Sorters";
import Message from './Message'
import DiscoverNavbar from "../Components/DiscoverNavbar";

import { getList } from "../utils";
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
  const [returns,setReturns] = useState(null)
  const [ order,setOrder] = useState('High-Low')

  const filters = {
    subscription: subscription,
    amount: amount,
    volatilities: volatilities,
    investment: investment,
    smallCaseData: smallCaseData,
    setLists:setLists
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
  function handleSorter(e){
    let sortName = e.target.value
    setSorter(e.target.value)
    console.log(e.target.value);
    if(sortName==='Popularity'){
      handlePopularity()
    }
    if(sortName==='Minimum Amount'){
      handleMinimumAmount()
    }
    if(sortName==='Recently Rebalanced'){
      handleLastRebalanced()
    }
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

  function handleOrder(e){
    console.log('niod');
    let orderName = e.target.textContent
    setOrder(orderName)
    getReturns({orderName:orderName,returnsValue:returns})
  }


function handleReturns(e){
  let returnsValue = e.target.textContent
  setReturns(returnsValue)
  getReturns({returnsValue:returnsValue})
}
function getReturns({returnsValue,orderName}){
  console.log(orderName,'on');
  
  let returnLists = []
  let returnsPeriod
  if(returnsValue==='1M'){
    returnsPeriod='monthly'
  }
  if(returnsValue==='6M'){
    returnsPeriod='halfyearly'
  }
  if(returnsValue==='1Y'){
    returnsPeriod='yearly'
  }
  if(returnsValue==='3Y'){
    returnsPeriod='threeYear'
  }
  if(returnsValue==='5Y'){
    returnsPeriod='fiveYear'
  }
  if(orderName==='High-Low'||orderName===undefined){
    console.log('here');
    console.log(returnsValue);
    
    returnLists = lists.sort((a,b)=>{
      return b.stats.returns[returnsPeriod]-a.stats.returns[returnsPeriod]
    })
  }else{
    returnLists = lists.sort((a,b)=>{
      return a.stats.returns[returnsPeriod]-b.stats.returns[returnsPeriod]
    })
  }
  
  setLists(returnLists)
}

  function handlePopularity() {
    let popularityLists = lists.sort((a,b)=>{
      return a.brokerMeta.flags.popular.rank-b.brokerMeta.flags.popular.rank
    })
    setLists(popularityLists)
  }

  function handleMinimumAmount() {
    console.log(lists);

    let s = lists.sort((a, b) => {
      console.log(a.stats.minInvestAmount);
      return a.stats.minInvestAmount - b.stats.minInvestAmount;
    });
    console.log(s);

    setLists([...s]);
  }
  function handleLastRebalanced() {
    let s = lists.sort((a, b) => {
      if (
        a.info.lastRebalanced === undefined ||
        b.info.lastRebalanced === undefined
      ) {
        return;
      }
      let d1 = a.info.lastRebalanced.split("T")[0];
      let nd1 = new Date(d1);
      let d2 = b.info.lastRebalanced.split("T")[0];
      let nd2 = new Date(d2);

      return nd1 - nd2;
    });
    console.log(s);

    setLists([...s]);
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
      <Message/>
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
        <SmallCaseBody lists={lists} />
      </div>
    </>
  );
};

export default SmallCases;
