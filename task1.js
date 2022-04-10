let DUMMY =[{name:'Bardan', age:12},{name:'Alex', age:11},{name:'Costea', age:18},{name:'Denis', age:29},{name:'Elena', age:22},{name:'Filip', age:30}]

function sortByAge(arr,order){
    if(order === 'asc'){
        return console.log(arr.sort((a,b)=>a.age-b.age))
    } else if (order === 'dsc'){
        return console.log(arr.sort((a,b)=>b.age-a.age))
    }
   
}

function sortByName(arr,order){
    if(order === 'asc'){
        return console.log(arr.sort((a,b)=>{
            if(a.name>b.name){
                return 1;
            }
            if(a.name<b.name){
                return -1;
            }
            return 0
        }))
    }else if(order === 'dsc'){
        return console.log(arr.sort((a,b)=>{
            if(a.name>b.name){
                return -1;
            }
            if(a.name<b.name){
                return 1;
            }
            return 0
        }))
    } }


sortByAge(DUMMY,'dsc');