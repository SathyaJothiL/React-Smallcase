import React from 'react'
import Message from './Message'
import SmallCases from './SmallCases'

const SmallCaseContainer = () => {
  return (
    <div className='mx-[80px] flex flex-col'>
      <Message/>
      <SmallCases/>
     
    </div>
  )
}

export default SmallCaseContainer
