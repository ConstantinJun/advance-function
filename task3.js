var obj = { 
    a: 1,
    b: { 
      c: 2
    },
    d: function(){
        console.log('text')
    }
  }


function deepCopyObj(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    if (obj instanceof Array) {
        let copy = [];
        for (let i = 0, len = obj.length; i < len; i++) {
            copy[i] = deepCopyObj(obj[i]);
        }
        return copy;
    }
    if (obj instanceof Object) {
        let copy = {};
        for (let attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = deepCopyObj(obj[attr]);
        }
        return copy;
    }
    throw new Error("Unable to copy obj this object.");
}


const result = deepCopyObj(obj) // work if value of key it`s function

let deepCopyObj2 = JSON.parse(JSON.stringify(obj)); // if in value of key we meet a function, it`s not copy 


console.log(result);

console.log(deepCopyObj2);