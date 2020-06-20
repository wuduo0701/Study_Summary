const arrayLike = {0: 'Bob', 1: 'Lucy', 2: 'Daisy', length: 3 }

// 1. 第一种借用slice方法
const arr1 = Array.prototype.slice.call(arrayLike);

// 2. 第二种使用es6的Array.from方法
const arr2 = Array.from(arrayLike);


console.log(arr1);
console.log(arr2);