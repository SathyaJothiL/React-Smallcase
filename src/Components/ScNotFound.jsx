import React from 'react'
import notFound from '../assets/notFound.svg'

const ScNotFound = () => {
  return (
    <div className='w-full items-center flex justify-center mt-24'>
        <img src={notFound} width="350px" height="300px"></img>
        <div className='ml-12 mt-16'>
            <h1 className='text-[rgb(47,54,63)] font-bold text-2xl mt-6'>No smallcase found</h1>
            <p className='text-[rgb(129,135,140)] mt-6 text-lg'>Try refining your search results or removing some filters</p>
            <button className='mt-6 px-3 py-2 border border-[rgb(31,122,224)] text-[rgb(31,122,224)] font-bold rounded-md'>Remove Filters</button>
        </div>
    </div>
  )
}

export default ScNotFound
