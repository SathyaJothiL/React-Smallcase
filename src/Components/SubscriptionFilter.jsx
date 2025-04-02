import React from "react";
import { buttonList } from "../../public/data/lists";

const SubscriptionFilter = ({ handleSubscription, subscription }) => {
  return buttonList.map((button) => (
    <button
      key={button}
      value={button}
      onClick={(e) => handleSubscription(e)}
      className={
        "px-5 font-bold flex-1 btn btn-primary " +
        (subscription === button
          ? "text-[rgb(31,122,224)] bg-[rgba(31,122,224,0.1)]"
          : "text-[rgb(129,135,140)]")
      }
    >
      <span className="break-words whitespace-normal">{button}</span>
    </button>
  ));
};

export default SubscriptionFilter;
