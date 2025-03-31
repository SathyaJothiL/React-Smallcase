import j from './smallcases.json' assert {type:'json'}


let data = j.data

let m = data.map(item=>[item.info.nameAttributes.displayName,item.stats.investorCount])
console.log(m);

// let a = [1,2,3,4,4,4]
// let b = [2,3,4,4,4,5,6]

// let s1= new Set(a)
// let s2 = new Set([...a,...b])
// console.log(s1);
// console.log(s2);

