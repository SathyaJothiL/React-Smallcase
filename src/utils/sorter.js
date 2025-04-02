export function getSorterLists({ sortName, lists }) {
  let resLists;
  if (sortName !== undefined) {
    if (sortName === "Popularity") {
      resLists = getPopularity(lists);
    }
    if (sortName === "Minimum Amount") {
      resLists = getMinimumAmount(lists);
    }
    if (sortName === "Recently Rebalanced") {
      resLists = getLastRebalanced(lists);
    }
    return resLists;
  }
}

export function getReturnsLists({ returnsValue, orderName, lists }) {
  let returnLists = [];
  let returnsPeriod;
  if (returnsValue === "1M") {
    returnsPeriod = "monthly";
  }
  if (returnsValue === "6M") {
    returnsPeriod = "halfyearly";
  }
  if (returnsValue === "1Y") {
    returnsPeriod = "yearly";
  }
  if (returnsValue === "3Y") {
    returnsPeriod = "threeYear";
  }
  if (returnsValue === "5Y") {
    returnsPeriod = "fiveYear";
  }
  if (orderName === "High-Low") {
    returnLists = lists.sort((a, b) => {
      return b.stats.returns[returnsPeriod] - a.stats.returns[returnsPeriod];
    });
  } else {
    returnLists = lists.sort((a, b) => {
      return a.stats.returns[returnsPeriod] - b.stats.returns[returnsPeriod];
    });
  }

  return returnLists;
}

function getPopularity(lists) {
  let popularityLists = lists.sort((a, b) => {
    return a.brokerMeta.flags.popular.rank - b.brokerMeta.flags.popular.rank;
  });
  return popularityLists;
}

function getMinimumAmount(lists) {
  let minAmountLists = lists.sort((a, b) => {
    console.log(a.stats.minInvestAmount);
    return a.stats.minInvestAmount - b.stats.minInvestAmount;
  });
  return minAmountLists;
}

function getLastRebalanced(lists) {
  let lastRebalancedLists = lists.sort((a, b) => {
    if (
      a.info.lastRebalanced === undefined ||
      b.info.lastRebalanced === undefined
    ) {
      return;
    }
    let d1 = a.info.lastRebalanced.split("T")[0];
    let newd1 = new Date(d1);
    let d2 = b.info.lastRebalanced.split("T")[0];
    let newd2 = new Date(d2);

    return newd1 - newd2;
  });
  return lastRebalancedLists;
}
