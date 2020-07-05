/**
 * 判断是否为数组
 */
var arr = [1, 2, 3];
// 1. 通过Object.prototype.toString.call
console.log(Object.prototype.toString.call(arr));   //输出为[object Array]

// 2. 通过Array.isArray()
console.log(Array.isArray(arr));    //输出为true，如果为true，则是数组

// 3. 通过instanceof做判断
console.log(arr instanceof Array);    //instance可以判断arr是否是数组原型链上的，如果是，则会返回true

// 4. 通过Array.prototype.isPrototypeOf
console.log(Array.prototype.isPrototypeOf(arr));   //检查arr是否存在于Array的原型链上。

// 5. 通过constructor判断
console.log(arr.constructor === Array);   //判断这个对象的constructor是否为数组