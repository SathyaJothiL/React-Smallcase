import React from 'react'

const InvStrategyFilter = ({strategy,hanldeInvestment}) => {
  return (
    <label className="px-2 py-1 flex strategys-center" >
              <input
                type="checkbox"
                value={strategy}
                onChange={(e) => hanldeInvestment(e)}
                className="before: mr-1"
              ></input>
              {strategy}
    </label>
  )
}

export default InvStrategyFilter
