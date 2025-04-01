import React from 'react'

const InvestmentFilter = ({button,handleAmount,amount,index}) => {
    const radioListName = [
        "Any",
        "Under ₹ 5,000",
        "Under ₹ 25,000",
        "Under ₹ 5,0000",
      ];
  return (
    <div className="px-2 py-1 mb-1" >
              <input
                id={button}
                type="radio"
                value={button}
                onChange={(e) => handleAmount(e)}
                checked={button===amount ? true : false}
                className={
                  " border border-black " +
                  (amount === button ? "bg-pink-300" : "")
                }
              ></input>
              <label htmlFor={button}>{radioListName[index]}</label>
    </div>
  )
}

export default InvestmentFilter
