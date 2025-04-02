import React from "react";
import SmallcaseCard from "./SmallcaseCard";
import CalloutCard from "./CalloutCard";
import ScNotFound from "./ScNotFound";

const SmallCaseBody = ({ lists, returns, handleClearAll }) => {
  return (
    <div className="flex flex-col w-full">
      <CalloutCard />
      {lists.length <= 0 ? (
        <ScNotFound handleClearAll={handleClearAll} />
      ) : (
        lists.map((smallcase, index) => (
          <SmallcaseCard key={index} smallcase={smallcase} returns={returns} />
        ))
      )}
    </div>
  );
};

export default SmallCaseBody;
