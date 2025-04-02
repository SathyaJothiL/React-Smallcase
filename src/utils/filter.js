export function getList({
  newSmallCase,
  subscription,
  amount,
  volatilities,
  investment,
  smallCaseData,
}) {
  console.log(subscription);
  console.log(amount);
  console.log(volatilities);
  console.log(investment);
  console.log(newSmallCase);

  let res = smallCaseData.filter((smallcase) => {
    return (
      filterAccess(subscription, smallcase) &&
      filterAmount(amount, smallcase) &&
      filterVolatility(volatilities, smallcase) &&
      filterNewSmallCases(newSmallCase, smallcase) &&
      filterInvestments(investment, smallcase)
    );
  });
  return res;
}

function filterAccess(subscription, smallcase) {
  if (subscription === "Show All") {
    return true;
  }
  let isFee = Boolean(smallcase.info.pricing);
  return subscription === "Fee Based" ? isFee : !isFee;
}

function filterAmount(amount, smallcase) {
  if (amount === "any") return true;

  if (smallcase.stats.minInvestAmount < amount) {
    return true;
  } else {
    return false;
  }
}

function filterVolatility(volatilities, smallcase) {
  if (
    volatilities.has(smallcase.stats.ratios.riskLabel) ||
    volatilities.size <= 0
  ) {
    return true;
  }
  return false;
}

function filterNewSmallCases(newSmallCase, smallcase) {
  if (
    smallcase.stats.ratios.marketCapCategory === "Small cap" ||
    newSmallCase === false
  )
    return true;
  return false;
}
function filterInvestments(investment, smallcase) {
  if (investment.size === 0) return true;
  let strategyLists = smallcase.info.investmentStrategy;
  let bool = strategyLists.some((strategy) => investment.has(strategy.key));
  return bool;
}
