const arr = [4,5,3,6,7,1,2,9,8];

const ascArr = arr.filter(el=>!(el%2)).sort((a,b)=>b-a);
const dscArr = arr.filter(el=>el%2).sort((a,b)=>b-a);
const newArr = ascArr.concat(dscArr);
console.log(ascArr)
console.log(dscArr)
console.log(newArr)