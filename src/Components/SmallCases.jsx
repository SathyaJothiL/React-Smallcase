import React from "react";
import { useState } from "react";
import smallCaseList from "../../smallcases.json";
import { Filter } from "./Filter";
const SmallCases = () => {
  const [subscription, setSubscription] = useState("all");

  const [amount, setAmount] = useState("any");
  let arr = smallCaseList["data"].slice(0, 3);
  const [lists, setLists] = useState(arr);

  const [volatality,setVolatility] = useState([])

  function handleSubscription(e) {
    // console.log(value);
    console.log(e.target.value);
    setSubscription(e.target.value);
    getList({ sub: e.target.value });
  }

  function handleAmount(e) {
    setAmount(e.target.value);
    getList({ amount: e.target.value });
  }

  function handleVolatility(e){
    console.log(e.target.value);
    let val = e.target.value
    if(volatality.includes(val)){
      let f = volatality.filter(item=>item!==val)
      setVolatility(f)
      return
    }
    let newVolatility = [...volatality,val]
    setVolatility(newVolatility)
  }

  function getAmountList(amount) {
    if (amount === "any") {
      return arr;
    }
    if (amount === "5000") {
      let f = arr.filter((sc) => sc.stats.minInvestAmount < 5000);
      return f;
    }
    if (amount === "25000") {
      let f = arr.filter((sc) => sc.stats.minInvestAmount < 25000);
      return f;
    }
    if (amount === "50000") {
      let f = arr.filter((sc) => sc.stats.minInvestAmount < 50000);
      return f;
    }
  }

  function getSubscriptionList(sub) {
    if (sub === "all") {
      return arr;
    }
    if (sub === "free") {
      let f = arr.filter((sc) => {
        return sc.stats.subscriberCount === 0;
      });
      return f;
    }
    if (sub === "fee") {
      let f = arr.filter((sc) => {
        return sc.stats.subscriberCount !== 0;
      });
      return f;
    }
  }
  function getList({ sub, amount }) {
    console.log(sub);
    console.log(amount);
    let l;
    if (sub !== undefined) {
      l = getSubscriptionList(sub);
      if (l.length === 0) {
        setLists([]);
        return;
      } else {
        setLists(l);
      }
    }
    if (amount !== undefined) {
      l = getAmountList(amount);
      setLists(l);
    }
  }



  return (
    <div className="flex">
      <Filter
        subscription={subscription}
        handleSubscription={handleSubscription}
        handleAmount={handleAmount}
        amount={amount}
        handleVolatility={handleVolatility}
      />
      <div className="flex gap-8 flex-col">
        {lists.length <= 0
          ? "sory"
          : lists.map((smallcase, index) => (
              <Card key={index} smallcase={smallcase} />
            ))}
      </div>
    </div>
  );
};

export default SmallCases;

const Card = ({ smallcase }) => {
  return (
    <div className="flex gap-8 w-[100%] h-auto bg-yellow-100">
      <img alt=""></img>
      <div className="flex gap-8 items-center justify-between">
        <section>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <h4>{smallcase.info.nameAttributes.displayName}</h4>
              <p>{smallcase.subscriberCount === 0 ? "Free Access" : ""}</p>
            </div>
            <p>{smallcase.shortDescription}</p>
            <p>{smallcase.info.owner.name}</p>
          </div>
          {/* <div>Bookmark</div> */}
        </section>
        <section>
          <div className="flex gap-8">
            <div className="flex gap-2">
              <div className="flex flex-col">
                <p>Min. Amount</p>
                <p>{smallcase.stats.minInvestAmount}</p>
              </div>
              <div className="flex flex-col">
                <p>{smallcase.stats.ratios.cagr} CAGR</p>
                <p>blurred</p>
              </div>
            </div>
            <div>
              <img alt=""></img>
              <p>{smallcase.stats.ratios.riskLabel}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
