import React from 'react'

const DiscoverNavbar = () => {
  return (
    <div className='mx-[80px] flex flex-col border-b border-[rgb(83,91,98)] shadow-lg shadow-[rgb(221,224,228)] border-opacity-30 mb-4'>
      <h1 className='font-bold  mt-[24px] text-2xl'>Discover</h1>
      <div className='flex mt-[24px] items-center'>
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
      <hr className='w-full border-[0px] border-[rgb(83,91,98)] shadow-lg shadow-[rgb(221,224,228)] border-opacity-30'></hr>
    </div>
  )
}

export default DiscoverNavbar
