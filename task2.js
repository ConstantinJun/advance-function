Array.prototype.myMap = function(fn) {
    return this.reduce((acc,cv)=>{
        acc.push(fn(cv));
        return acc;
    },[])
}

Array.prototype.myFilter = function(fn){
    return this.reduce((acc,cv)=>{
    if(fn(cv)){
        acc.push(cv);
    }return acc;},[])}

Array.prototype.myEvery = function(fn){
    return this.reduce((acc,cV) => {
        return acc && fn(cV)
    },true)}




const ass = [1,2,3,4];
console.log(ass);
console.log(ass.myMap((el)=>{ return el+1}))
console.log(ass.myFilter((el)=>{ return el>2}))
console.log(ass.myEvery(el=>el>0))

