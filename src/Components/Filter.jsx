
import React from "react";


export const Filter = ({subscription,handleSubscription,handleAmount,amount,handleVolatility}) =>{

    return (
      <div>
        <section className="flex flex-col">
          <p>Subscription</p>
          <div className="flex gap-4">
            <button value='all' onClick={(e)=>handleSubscription(e)}  className={"p-2 border border-black py-4 " + (subscription==='all' ? 'bg-pink-300': '') }>Show All</button>
            <button value='free' onClick={(e)=>handleSubscription(e)}  className={"p-2 border border-black py-4 " + (subscription==='free' ? 'bg-pink-300': '') }>Free Access</button>
            <button value='fee' onClick={(e)=>handleSubscription(e)} className={"p-2 border border-black py-4 " + (subscription==='fee' ? 'bg-pink-300': '') }>Fee Based</button>
          </div>
        </section>
        
        <section className="flex flex-col py-4">
          <p>Investement Amount</p>
          <div className="flex gap-4">
            <button value="any" onClick={(e)=>handleAmount(e)}  className={"p-2 border border-black py-4 " + (amount==='any' ? 'bg-pink-300': '') }>Any</button>
            <button value="5000" onClick={(e)=>handleAmount(e)}  className={"p-2 border border-black py-4 " + (amount==='5000' ? 'bg-pink-300': '') }>Under 5k</button>
            <button value="25000" onClick={(e)=>handleAmount(e)}  className={"p-2 border border-black py-4 " + (amount==='25000' ? 'bg-pink-300': '') }>Under 25k</button>
            <button value="50000" onClick={(e)=>handleAmount(e)}  className={"p-2 border border-black py-4 " + (amount==='50000' ? 'bg-pink-300': '') }>Under 50k</button>
          </div>
        </section>
  
        <section className="flex flex-col py-4">
          <p>Volatality</p>
          <div className="flex gap-4">
            <button value="low" onClick={(e)=>handleVolatility(e)} className="p-2 border border-black">low</button>
            <button value="medium" onClick={(e)=>handleVolatility(e)} className="p-2 border border-black">medium</button>
            <button value="high" onClick={(e)=>handleVolatility(e)} className="p-2 border border-black">high</button>
          </div>
        </section>
        <section className="p-4">
          <div>
            <input type="checkbox" id="launch"></input>
            <label htmlFor="launch">Launch Date</label>
          </div>
        </section>
        <section>
          Investement strategy
        </section>
      </div>
    )
  }