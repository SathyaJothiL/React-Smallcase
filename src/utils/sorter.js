export function getSorterLists({ sorter, lists }) {
  let resLists;
  if (sorter !== undefined) {
    if (sorter === "Popularity") {
      resLists = getPopularity(lists);
    }
    if (sorter === "Minimum Amount") {
      resLists = getMinimumAmount(lists);
    }
    if (sorter === "Recently Rebalanced") {
      resLists = getLastRebalanced(lists);
    }
    return resLists;
  }
}

export function getReturnsLists({ returns, order, lists }) {
  let returnLists = [];
  let returnsPeriod;
  if (returns === "1M") {
    returnsPeriod = "monthly";
  }
  if (returns === "6M") {
    returnsPeriod = "halfyearly";
  }
  if (returns === "1Y") {
    returnsPeriod = "yearly";
  }
  if (returns === "3Y") {
    returnsPeriod = "threeYear";
  }
  if (returns === "5Y") {
    returnsPeriod = "fiveYear";
  }
  if (order === "High-Low") {
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
