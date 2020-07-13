## js异步

异步进化史: 回调函数 -> Promise -> Generator -> async/await
### 回调函数
- 回调地狱
多重回调函数嵌套造成了以})结尾的语句,代码可维护性,可读性极差

### Promise
Promise 对象是一个代理对象,他有三种状态:
1. pending  表示进行中
2. fulfilled  表示处理成功
3. rejected 表示处理失败

### promise 和 async/await 的区别
1. 首先promise 和async， await函数都是解决异步编程的方法，但是async和await函数很大的的特点就是让异步代码看起来像同步代码，只需要在函数前加一个async来标记这是一个异步函数，隐含着函数会返回一个Promise
2. await函数必须在async的后面，不能单独使用，不能在顶层
3. promise的使用可能会嵌套大量的.then函数来处理Promise，而async/await则直接在代码按顺序上处理结果，代码量减少的同时，显得更简洁。
4. promise.then里的回调函数会放到相应宏任务的微任务队列里，等宏任务里面的同步代码执行完再执行；async函数表示函数里面可能会有异步方法，await后面跟一个表达式，async方法执行时，遇到await会立即执行表达式，然后把表达式后面的代码放到微任务队列里，让出执行栈让同步代码先执行。

注: Promise实例的状态是可以改变的，但它只允许被改变一次,即pending到fulfilled后就不会改变
#### promise的使用
- Promise.resolve()  Promise.resolve(1) 的状态一直都是fulfilled， 会把参数直接传给后面使用他的函数
- Promise.reject()  Promise.reject(2)的状态一直都是rejected， 会把参数直接传给后面使用他的函数
```js
let p1 = Promise.resolve(1);  
let p2 = Promise.reject(2);
```
- Promise.all()  Promise.all只有全部参数都变为fulfilled, p的状态才会边为fulfilled 或者一个状态率先变成rejected，p的状态才会变为rejected
```js
// 这里的状态rejected，此时第一个rejected会被传入执行
// p2会被直接执行
Promise.all([p1, p2])
  .then((res) => console.log(res))   
  .catch((err) => console.log(err));  //输出为2
```
- Promise.race() 有一个率先改变状态，率先改变的 Promise 实例的返回值就是回调的参数
❗ 如果里面都是已fulfilled/rejected的Promise，则会取第一个作为解析
```js
Promise.race([p1, p2])
  .then((res) => console.log(res))  //只会输出p1的状态，输出为1
  .catch((err) => console.log(err));

Promise.race([p2, p1])
.then((res) => console.log(res))
.catch((err) => console.log(err));    //只会输出p2的状态，输出为2
```

