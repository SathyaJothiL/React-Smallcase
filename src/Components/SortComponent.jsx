import React from 'react'

const SortComponent = ({sortItem,handleSorter,sorter}) => {
  
    return (
    <label className="flex justify-between mb-2">
          {sortItem}
          <input
            type="radio"
            value={sortItem}
            onChange={(e)=>handleSorter(e)}
            checked={sorter === sortItem ? true : false}
          ></input>
    </label>
  )
}

export default SortComponent
