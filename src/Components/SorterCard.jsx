import React from "react";
import SortComponent from "./SortComponent";
import SortPeriodButton from "./SortPeriodButton";
import SortOrder from "./SortOrder";

const SorterCard = ({
  sorter,
  handleSorter,
  returns,
  order,
  handleReturns,
  handleOrder,
}) => {
  let periodList = ["1M", "6M", "1Y", "3Y", "5Y"];
  let sortingList = ["Popularity", "Minimum Amount", "Recently Rebalanced"];
  let orderList = ["High-Low", "Low-High"];
  return (
    <div className="p-3 absolute bg-white">
      <div className="flex flex-col">
        {sortingList.map((sortItem) => (
          <SortComponent
            key={sortItem}
            sortItem={sortItem}
            handleSorter={handleSorter}
            sorter={sorter}
          />
        ))}
      </div>
      <div>
        <p className="mb-3">Returns</p>
        <p className="mb-3">Time Period</p>
        <div>
          {periodList.map((period) => (
            <SortPeriodButton
              period={period}
              key={period}
              returns={returns}
              handleReturns={handleReturns}
            />
          ))}
        </div>
      </div>

      {order === null ? (
        ""
      ) : (
        <div>
          <p className="mt-3 mb-1">OrderBy</p>
          {orderList.map((orderItem) => (
            <SortOrder
              key={orderItem}
              order={order}
              orderItem={orderItem}
              handleOrder={handleOrder}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SorterCard;
