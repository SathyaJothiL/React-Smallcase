import React from "react";
import { Card } from "./SmallcaseCard";
import CalloutCard from "./CalloutCard";

const SmallCaseBody = ({lists}) => {
  return (
    <div  className="flex flex-col w-full">
      <CalloutCard />
      {lists.length <= 0
        ? "sory"
        : lists.map((smallcase, index) => (
            <Card key={index} smallcase={smallcase} />
          ))}
    </div>
  );
};

export default SmallCaseBody;
