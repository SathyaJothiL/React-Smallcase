import React from 'react'

const CalloutCard = () => {
  return (
    <div className='mb-6'>
      <div className='px-6 py-4 flex justify-between bg-[rgb(234,239,252)]'>
            <div className='flex flex-col'>
                <p className='font-bold'>Unlock all metrics</p>
                <p className=''>Login to see the live performance and returns</p>
            </div>
            <button className='px-3 py-2 border border-[rgb(31,122,224)] text-[rgb(31,122,224)] font-bold rounded-sm'>Login</button>
      </div>
    </div>
  )
}

export default CalloutCard
