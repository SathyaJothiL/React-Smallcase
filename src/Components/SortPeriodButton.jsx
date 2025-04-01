import React from 'react'

const SortPeriodButton = ({period,returns,handleReturns}) => {
  return (
    <button
    onClick={handleReturns}
              className={
                "px-2 py-1 font-bold flex-1 btn btn-primary " +
                (period === returns
                  ? "text-[rgb(31,122,224)] bg-[rgba(31,122,224,0.1)]"
                  : "text-[rgb(129,135,140)]")
              }
            >
              {period}
    </button>
  )
}

export default SortPeriodButton
