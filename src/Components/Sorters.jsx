import React, { useState } from "react";
import SorterCard from "./SorterCard";
import DropdownIcon from "../Logos/DropdownIcon";

const Sorters = ({ handleSorter,sorter,returns,order,handleReturns,handleOrder }) => {
  const [isOpen, setisOpen] = useState(false);

  function handleIsOpen() {
    setisOpen(!isOpen);
  }
  return (
    <div>
      <div className="relative">
        <button onClick={handleIsOpen}>
          <div className="flex justify-between pb-4 pl-2 pr-1">
            <div className="flex">
              <p className="mr-1">Sort by</p>
              <p className="mr-6"> Popularity</p>
            </div>
            <DropdownIcon />
          </div>
        </button>
      </div>
      {isOpen && (
        <SorterCard
        handleSorter={handleSorter}
          sorter={sorter}
          returns={returns}
      order={order}
      handleReturns={handleReturns}
      handleOrder={handleOrder}
        />
      )}
    </div>

    // <div className='flex gap-4 bg-yellow-300 justify-start items-start'>
    //   <button onClick={handleMinimumAmount}>Min</button>
    //   <button onClick={handleLastRebalanced}>rebalance</button>
    //   <button>popularity</button>
    // </div>
  );
};

export default Sorters;
