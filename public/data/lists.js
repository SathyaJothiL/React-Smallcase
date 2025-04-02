import smallCaseData from "./smallcaseData";
const investmentStrategyList = smallCaseData.map((item) => {
    let temp = item.info.investmentStrategy;
    let t = temp.map((item) => item.key);
    return t;
  });
  
 export const investmentStrategySet = new Set(investmentStrategyList.flat());

 export const buttonList = ["Show All", "Free Access", "Fee Based"];
 export const radioList = ["any", "5000", "25000", "50000"];

 export const radioListName = [
    "Any",
    "Under ₹ 5,000",
    "Under ₹ 25,000",
    "Under ₹ 5,0000",
  ];