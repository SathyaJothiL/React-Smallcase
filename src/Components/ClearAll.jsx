import React from 'react'

const ClearAll = ({handleClearAll}) => {
  return (
    <button onClick={handleClearAll} className='text-[rgb(31,122,224)] font-bold'>
        ClearAll
    </button>
  )
}

export default ClearAll
