const arr = [1, 2];

console.log(typeof(arr)); // 不行，只能判断出为对象
// 下面三个行
console.log(Array.isArray(arr));  //true
console.log(Object.prototype.toString.call(arr)); //[object Array]
console.log(arr instanceof Array);  //true