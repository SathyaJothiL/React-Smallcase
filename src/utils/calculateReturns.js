export function calculateReturns(smallCase, returns) {
  let percentage, returnsPeriod;
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
  } else {
    returnsPeriod = "yearly";
  }
  percentage = (smallCase.stats.returns[returnsPeriod] * 100).toFixed(2) + "%";
  console.log(percentage);

  return percentage;
}
