export function getList({
  sub,
  amounts,
  volatility,
  investments,
  newsc,
  subscription,
  amount,
  volatilities,
  investment,
  smallCaseData,
  setLists
}) {
  let subLists, amountLists, volLists, newScLists, strategyLists;
  if (sub !== undefined) {
    console.log("sub", sub);
    subLists = getSubscriptionList(sub,smallCaseData);
  } else {
    console.log("sub", sub);
    subLists = getSubscriptionList(subscription,smallCaseData);
  }

  if (amounts !== undefined) {
    console.log("amounts", amounts);
    amountLists = getAmountList(subLists, amounts);

  } else {
    console.log("amounts", amounts);
    amountLists = getAmountList(subLists, amount);
  }

  if (volatility !== undefined) {
    if (volatility.length === 0) {
        volLists = amountLists;
    } else {

      volLists = amountLists.filter((item) => volatility.includes(item.stats.ratios.riskLabel));
    }
  } else {
    if (volatilities.length === 0) {

      volLists = amountLists;
    } else {

      volLists = amountLists.filter((item) =>
        volatilities.includes(item.stats.ratios.riskLabel)
      );
    }
  }
  if (newsc !== undefined) {
    if (newsc) {
        newScLists = volLists.filter(
        (item) => item.stats.ratios.marketCapCategory === "Small cap"
      );
    } else {
        newScLists = volLists;
    }
  } else {
    newScLists = volLists;
  }

  if (investments !== undefined) {


    if (investments.length === 0) {
        strategyLists = newScLists;
    } else {
        strategyLists = newScLists.filter((item) => {
        let temp = item.info.investmentStrategy;
        let bool = temp.some((x) => investments.includes(x.key));
        return bool;
      });
    }
  } else {
    if (investment.length === 0) {
        strategyLists = newScLists;
    } else {
        strategyLists = newScLists.filter((item) => {
        let temp = item.info.investmentStrategy;
        let bool = temp.some((x) => investment.includes(x.key));
        return bool;
      });
    }
  }

  setLists(strategyLists);
  return;
}

function getAmountList(subLists, amount) {
    if (amount === "any") {
      return subLists;
    }
    if (amount === "5000") {
      let filLists = subLists.filter((sc) => sc.stats.minInvestAmount < 5000);
      return filLists;
    }
    if (amount === "25000") {
      let filLists = subLists.filter((sc) => sc.stats.minInvestAmount < 25000);
      return filLists;
    }
    if (amount === "50000") {
      let filLists = subLists.filter((sc) => sc.stats.minInvestAmount < 50000);
      return filLists;
    }
  }
  
  function getSubscriptionList(sub,smallCaseData) {
    if (sub === "Show All") {
      return smallCaseData;
    }
    if (sub === "Free Access") {
      let filLists = smallCaseData.filter((sc) => {
        return sc.stats.subscriberCount === 0;
      });
  
      return filLists;
    }
    if (sub === "Fee Based") {
      let filLists = smallCaseData.filter((sc) => {
        return sc.stats.subscriberCount !== 0;
      });
  
      return filLists;
    }
  }


  