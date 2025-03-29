import React from 'react'

const DiscoverNavbar = () => {
  return (
    <div className='flex flex-col border-b border-[rgb(83,91,98)] shadow-lg shadow-[rgb(221,224,228)] border-opacity-30'>
      <h1 className='font-bold mx-[80px] mt-[24px] text-2xl'>Discover</h1>
      <div className='flex mx-[80px] mt-[24px] mb-4 items-center'>
        <section className='flex'>
          <div className='pr-[32px] pb-[16px]'>
            <a>
              <h3>Collections</h3>
            </a>
          </div>
          <div className='pr-[32px] pb-[16px]'>
            <a>
              <h3>All Smallcases</h3>
            </a>
          </div>
          <div className='pr-[32px] pb-[16px]'>
            <a>
              <h3>Managers</h3>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DiscoverNavbar
