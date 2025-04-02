import React from "react";
import ClearAll from "./ClearAll";
const FilterHeader = ({ handleClearAll, filterCount }) => {
  return (
    <div className="flex justify-between items-center py-4 mt-6 mb-4">
      <div>
        Filter
        <span className="px-2 py-1 bg-[rgb(231,233,234)] ml-2 rounded-sm">
          {filterCount}
        </span>
      </div>
      <ClearAll handleClearAll={handleClearAll} />
    </div>
  );
};

export default FilterHeader;
