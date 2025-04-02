export function calculateFilterCount({
  subscription,
  amount,
  volatilities,
  investment,
  newSmallCase,
}) {
  let count = 0;
  if (subscription !== "Show All") {
    count += 1;
  }
  if (amount !== "any") {
    count += 1;
  }
  if (newSmallCase !== false) {
    count += 1;
  }
  count += volatilities.size + investment.size;
  return count;
}
