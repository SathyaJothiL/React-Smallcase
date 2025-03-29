import React, { useState } from 'react'
import data from '../../data'

const New = () => {
    const f ={
        color:{},
        gender:{},
        material:{},
        category:{}
    }

    const [ filters ,setFilters] = useState(f)

function handleClick(e,category){
    console.log(e.target.value);
    let val = e.target.value
    setFilters(prev=>({
        ...prev,
        [category]:{
            ...prev[category],
            [val] : !prev[category][val]
        }
    }))
    
}

const getList = () =>{
    let active = {}
    let t=[]
   let s =  Object.keys(filters).forEach(key=>{
        console.log(key,'key');
        
        let sub = filters[key]
        console.log(sub,'sub');
        
        let temp = Object.keys(sub).filter(k=>{
            console.log(k,'k');
            console.log(filters[key][k],'b');
            return filters[key][k]
        })
        t.push(temp)
        console.log(temp,'temp'); 
    })
    return t
}

  

const generatelist = (products,filters)=>{
    console.log(products);
    console.log(filters);
    
    
}
const currList = getList()
console.log(currList);
let res = generatelist(data,currList)
console.log(res);

    
  return (
    <div>
        <div className='p-4 m-4 flex display gap-4'>
            <button onClick={(e)=>handleClick(e,"color")} className='p-4 bg-yellow-100' value="white">white</button>
            <button onClick={(e)=>handleClick(e,"color")} className='p-4 bg-yellow-100' value="pink">pink</button>
            <button onClick={(e)=>handleClick(e,"color")} className='p-4 bg-yellow-100' value="blue">blue</button>
        </div>
      {
        data.map(product=>(
            <li key={product.id}>
                {product.name}-{product.color}
            </li>
        ))
      }
    </div>
  )
}

export default New
