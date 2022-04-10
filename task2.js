Array.prototype.myMap = function (fn) {
  return this.reduce((acc, cv) => {
    acc.push(fn(cv));
    return acc;
  }, []);
};

Array.prototype.myFilter = function (fn) {
  return this.reduce((acc, cv) => {
    if (fn(cv)) {
      acc.push(cv);
    }
    return acc;
  }, []);
};

Array.prototype.myEvery = function (fn) {
  return this.reduce((acc, cV) => {
    return acc && !!fn(cV);
  }, true);
};

Array.prototype.mySome = function (fn) {
  return this.reduce((acc, cv) => {
    return acc || !!fn(cv);
  }, false);
};

Array.prototype.myFind = function (fn) {
  return this.reduce((acc, cv, ind, arr) => {
    if (fn(cv)) {
      return !acc ? (acc = arr[ind]) : acc;
    }
    return acc;
  }, undefined);
};

Array.prototype.myIndexOf = function (fn) {
  return this.reduce((acc, cv, ind, arr) => {
    if (fn(cv)) {
      return acc === -1 ? (acc = ind) : acc;
    }
    return acc;
  }, -1);
};

const arr = [1, 2, 3, 4];
const arr1 = ["text1", "alt", "ctrl"];

console.log(
  arr.myMap((el) => {
    return el + 1;
  })
);
console.log("-----------------------------");

console.log(
  arr.myFilter((el) => {
    return el > 2;
  })
);
console.log("-----------------------------");

console.log(
  arr.myEvery((el) => {
    return el > 2;
  })
);
console.log("-----------------------------");

console.log(
  arr.mySome((el) => {
    return el > 1;
  })
);
console.log("-----------------------------");

console.log(
  arr.myFind((el) => {
    return el > 3;
  })
);
console.log("-----------------------------");

console.log(
  arr1.myIndexOf((el) => {
    return el === "alt";
  })
);
