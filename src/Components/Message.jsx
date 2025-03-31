import React from 'react'
import filter from '../assets/filter.svg'

const Message = () => {
  return (
    <div className='mb-3 border border-[rgb(221, 224,228)] rounded-sm px-4 py-3 '>
      <div className='flex items-center justify-between'>
        <section className='flex items-center'>
          <div className='mr-3'>
            <img src={filter} alt='filter-icon' width="32px" height="32px"></img>
          </div>
          <p><span className='font-bold'>How to Choose your smallcase? -- </span>
          Apply filters like returns, minimum investment smallcases based on your preferences</p>
        </section>
        <section className='flex'>
            <button className='px-2 mr-6 text-[rgb(31,122,224)] font-bold'>Learn More</button>
            <button className='px-2 mr-6 text-[rgb(129,135,140)] font-bold'>Got it</button>
        </section>
      </div>
    </div>
  )
}

export default Message
