import React from 'react'
import filter from '../assets/filter.svg'

const Message = () => {
  return (
    <div className='flex gap-3 px-4 py-3 mb-3'>
      <div>
        <img src={filter} alt='filter-icon'></img>
      </div>
      <p>Message</p>
    </div>
  )
}

export default Message
