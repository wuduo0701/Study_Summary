let p1 = Promise.resolve(1);  
let p2 = Promise.reject(2);

// Promise.resolve(1)的状态一直都是fulfilled， 会把参数直接传给后面使用他的函数
// Promise.reject(2)的状态一直都是rejected， 会把参数直接传给后面使用他的函数

// Promise.all只有全部参数都变为fulfilled, p的状态才会变为fulfilled
  // 或者一个状态变成rejected，p的状态才会变为rejected
  
// 这里的状态rejected，此时第一个rejected会被传入执行
// p2会被直接执行
// Promise.all([p1, p2])
//   .then((res) => console.log(res))   
//   .catch((err) => console.log(err));  //输出为2

// 有一个率先改变状态，率先改变的 Promise 实例的返回值就是回调的参数

// 如果里面都是已fulfilled/rejected的Promise，则会取第一个作为解析
Promise.race([p1, p2])
  .then((res) => console.log(res))  //输出为1
  .catch((err) => console.log(err));

Promise.race([p2, p1])
.then((res) => console.log(res))
.catch((err) => console.log(err));    //输出为2


