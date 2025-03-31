import React from 'react'

const Sorters = ({handleMinimumAmount,handleLastRebalanced}) => {
    return (
      <div className='flex gap-4 bg-yellow-300 justify-start items-start'>
        <button onClick={handleMinimumAmount}>Min</button>
        <button onClick={handleLastRebalanced}>rebalance</button>
        <button>popularity</button>
      </div>
    )
  }
  


export default Sorters
