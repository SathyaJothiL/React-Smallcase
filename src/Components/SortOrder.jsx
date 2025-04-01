import React from 'react'

const SortOrder = ({handleOrder,order,orderItem}) => {
  return (
    <button
    onClick={handleOrder}
    className={
                "px-2 py-1 font-bold flex-1 btn btn-primary " +
                (order === orderItem
                  ? "text-[rgb(31,122,224)] bg-[rgba(31,122,224,0.1)]"
                  : "text-[rgb(129,135,140)]")
              }
            >
    {orderItem}
    </button>
  )
}

export default SortOrder
