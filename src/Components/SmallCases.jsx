import React from "react";
import { useState } from "react";
import smallCaseList from "../../smallcases.json";
import { Filter } from "./Filter";
import SmallCaseBody from "./SmallCaseBody";
import Sorters from "./Sorters";
const SmallCases = () => {
  const [subscription, setSubscription] = useState("Show All");

  const [amount, setAmount] = useState("any");
  let arr = smallCaseList["data"]
  const [lists, setLists] = useState(arr);

  const [volatality, setVolatility] = useState([]);

  const investmentStrategyList = arr.map((item) => {
    let temp = item.info.investmentStrategy;
    let t = temp.map((item) => item.key);
    return t;
  });
  const investmentStrategySet = new Set(investmentStrategyList.flat());

  const [investment, setInvestment] = useState([]);
  const [newSmallCase, setNewSmallCase] = useState(false)

  function handleSubscription(e) {
    // console.log(value);
    console.log(e,'e');
    console.log(e.target.textContent,'e');
    setSubscription(e.target.textContent);
    getList({ sub: e.target.textContent });
  }

  function handleAmount(e) {
    setAmount(e.target.value);
    getList({ amounts: e.target.value });
  }

  function handleVolatility(e) {
    // console.log(e.target.value);
    let val = e.target.value;
    if (volatality.includes(val)) {
      let f = volatality.filter((item) => item !== val);
      getList({ volatility: [...f] });
      setVolatility(f);
      return;
    }

    let newVolatility = [...volatality, val];
    getList({ volatility: newVolatility });
    setVolatility(newVolatility);
  }

  function handleNewSmallCase(e){
    console.log(e.target.checked);
    setNewSmallCase(e.target.checked)
    getList({newsc:e.target.checked})
  }

  function hanldeInvestment(e) {
    let val = e.target.value;

    if (investment.includes(val)) {
      let f = investment.filter((item) => item !== val);
      getList({ investments: [...f] });
      setInvestment(f);
      return;
    }

    let newInvestment = [...investment, val];
    getList({ investments: newInvestment });
    setInvestment(newInvestment);
  }

  function getAmountList(l,amount) {
    if (amount === "any") {
      return l;
    }
    if (amount === "5000") {
      let f = l.filter((sc) => sc.stats.minInvestAmount < 5000);
      return f;
    }
    if (amount === "25000") {
      let f = l.filter((sc) => sc.stats.minInvestAmount < 25000);
      return f;
    }
    if (amount === "50000") {
      let f = l.filter((sc) => sc.stats.minInvestAmount < 50000);
      return f;
    }
  }

  function getSubscriptionList(sub) {
    if (sub === "Show All") {
      return arr;
    }
    if (sub === "Free Access") {
      let f = arr.filter((sc) => {
        return sc.stats.subscriberCount === 0;
      });
     
      return f;
    }
    if (sub === "Fee Based") {
      let f = arr.filter((sc) => {
        return sc.stats.subscriberCount !== 0;
      });
      console.log(f,'f');
      
      return f;
    }
  }
// function getNewSmallCaseList(){

// }

  function getList({ sub, amounts, volatility, investments,newsc }) {
    console.log(sub);
    console.log(amount);
    let l,f,m,n,o;
    // if (sub !== undefined) {
    //   l = getSubscriptionList(sub);
    //   if (l.length === 0) {
    //     setLists([]);
    //     return;
    //   } else {
    //     setLists(l);
    //   }
    // }
    if(sub!==undefined){
      console.log('sub',sub);
      l = getSubscriptionList(sub)
    }else{
      console.log('sub',sub);
      l = getSubscriptionList(subscription)
    }

    if (amounts !== undefined) {
      console.log('amounts',amounts);
      f = getAmountList(l,amounts);
      console.log(f);
      
    }else{
      console.log('amounts',amounts);
      f=getAmountList(l,amount)
    }

    if (volatility !== undefined) {
      if(volatility.length===0){
        m=f
      }else{
         console.log('volatility',volatility);
       m = f.filter((item) =>
        volatility.includes(item.stats.ratios.riskLabel)
      );
      }
     
    }else{
      if(volatality.length===0){
        console.log('volatalilty 0');
        m=f
      }else{
        console.log('volatility',volatility);
        m = f.filter((item) =>
        volatality.includes(item.stats.ratios.riskLabel)
      );
      }
    }

    

    if(newsc!==undefined){
      if(newsc){
        n=m.filter(item=>item.stats.ratios.marketCapCategory==='Small cap')
      }else{
        n=m
      }
    }else{
      n=m
    }


    if (investments !== undefined) {
      console.log("im in ");
      console.log(investments);
      
      if(investments.length===0){
        o=n
      }else{
       o = n.filter((item) =>{
        let temp = item.info.investmentStrategy
        let bool = temp.some(x=>investments.includes(x.key))  
        return bool
       });
      }  
    }else{
      if(investment.length===0){
        o=n
      }else{
        o = n.filter((item) =>{
          let temp = item.info.investmentStrategy
          let bool = temp.some(x=>investment.includes(x.key))  
          return bool
         });
      }
    }
    console.log(o);
    
    setLists(o)
    return
  }


    function handleMinimumAmount(){
      console.log(lists);
      
      let s = lists.sort((a,b)=>{
        console.log(a.stats.minInvestAmount);
        return a.stats.minInvestAmount-b.stats.minInvestAmount
      })
      console.log(s);
      // let b = s.map(item=>item.stats.minInvestAmount)
      // console.log(b);
      
      setLists([...s])
      
    }
    function handleLastRebalanced(){
      let s = lists.sort((a,b)=>{
        if(a.info.lastRebalanced===undefined || b.info.lastRebalanced===undefined){
          return
        }
        let d1 = (a.info.lastRebalanced).split('T')[0]
        let nd1 = new Date(d1)
        let d2 = (b.info.lastRebalanced).split('T')[0]
        let nd2 = new Date(d2)
        
        return nd1-nd2
      })
      console.log(s);
      
      setLists([...s])
    }

  return (
    <div className="flex w-full">
      <Sorters handleMinimumAmount={handleMinimumAmount} handleLastRebalanced={handleLastRebalanced}/>
      <Filter
        subscription={subscription}
        handleSubscription={handleSubscription}
        handleAmount={handleAmount}
        amount={amount}
        handleVolatility={handleVolatility}
        volatality={volatality}
        investmentStrategySet={[...investmentStrategySet]}
        setInvestment={setInvestment}
        investment={investment}
        hanldeInvestment={hanldeInvestment}
        handleNewSmallCase={handleNewSmallCase}
      />
      <SmallCaseBody lists={lists}/>
   
    </div>
  );
};



  
export default SmallCases;