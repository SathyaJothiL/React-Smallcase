import React from "react";

const NewScFilter = ({newSmallCase,handleNewSmallCase}) => {
  return (
    <label htmlFor="launch" className="flex items-center">
      <input
        type="checkbox"
        id="launch"
        className="mr-1"
        checked={newSmallCase}
        onChange={handleNewSmallCase}
      ></input>
      Include new smallcases
    </label>
  );
};

export default NewScFilter;
