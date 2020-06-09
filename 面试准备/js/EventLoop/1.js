// 这里的数据类型为obj，是复杂数据类型，是堆空间存数据，栈空间存变量以及堆空间的地址
let obj = { a: 1 };
console.log(obj)
// 这里newObj复制了obj指向堆空间的指针，两者指向了统一地址
let newObj = obj;
console.log(obj)
// 因为他们用的是同一堆空间指针，这里改变的数据也会影响obj，改变的是同一个数据
newObj.a = 2;
console.log(obj.a);//变成了2