### 作用域
- 区别：
1. 声明
let 定义变量未赋值显示为undifined
var 定义变量未赋值显示为undifined
2. 使用未声明的变量
let 会显示报错  ReferenceError
var 显示为undefined
3. 重复声明时
var重复声明，后一次声明会覆盖前一次声明
let重复声明，会报错   SyntaxError: Identifier 'i' has already been declareds

var定义后，let再次定义，会报错
```js
var i = 2
let i = 1
console.log(i)   SyntaxError: Identifier 'i' has already been declared
```
let定义后，var再次定义，会报错
```js
let i = 1
var i = 2
console.log(i)   SyntaxError: Identifier 'i' has already been declared
```
4. let有块级作用域，而var定义的是全局变量

5. let在循环中只在本轮循环中有效，每一次循环都是新的一个i
问题q？：既然每一次循环都是新的一个i，怎么知道for上一次循环的值呢？
a:  js引擎会记住上一次循环的i值，然后赋给新一轮的i
for()是父级作用域， {}里是单独的子作用域 两个let互不影响
```js
  for(let i = 0; i < 3; i++) {
    let i = 4
    console.log(i)
  }
```

```js
输出为1...10，let有块级作用域，for里的let定义在for循环块级作用域中，互补影响
let i = 1
for (let i = 0; i <= 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0);
}

会报错 ，let定义在了全局作用域中，而var定义的又是全局变量
let i = 1
for (var i = 0; i <= 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0);
}
输出为0...10,var定义的全局变量不影响let块级作用域中的定义
var i = 1
for (let i = 0; i <= 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0);
}
```

6. var有变量提升， let没有
变量提升就是该变量还未声明,但是却可以使用未声明的变量 或者 在创建阶段将变量声明赋予默认值的过程就叫做变量提升
```js
console.log(a) //undefined
var a = 1

console.log(b)  //报错
let b = 2
```

7. 暂时性死区
使用let定义变量前，该变量都是不可用的，这种语法就叫做暂时性锁区
```js
var a = 1;
if(true) {
  console.log(a);    //会正常的读取到全局变量a
}
if(true) {
  a = 2;  
  let a;    用let定义，会被绑定到块级作用域中， 这样就是在let声明前定义变量，会直接报错
  console.log(a);
}

if (true) {
  tmp = 'abc'; //暂时性锁区
  console.log(tmp); //声明之前使用tmp变量，报错

  let tmp;    //定义了变量，锁区结束
  console.log(tmp);   //显示为undefined

  tmp = 123;  //赋值
  console.log(tmp);   //显示为123
}
```
8. const 

const 一旦使用必须赋值，否则会报错

const 同样有暂时性锁区和不存在变量提升

√注意： const保证的实际上不是值不可改变，而是指向那个值的指针不会改变

9. ES6声明变量的六种方式
var let const function  import class


## 异步编程的解决方案

1.  promise

2.  async 

3. Generator

### promise和async，await的区别

1. 首先promise 和async， await函数都是解决异步编程的方法，但是async和await函数很大的的特点就是让异步代码看起来像同步代码，只需要在函数前加一个async来标记这是一个异步函数，隐含着函数会返回一个Promise
2. await函数必须在async的后面，不能单独使用，不能在顶层
3. promise的使用可能会嵌套大量的.then函数来处理Promise，而async/await则直接在代码按顺序上处理结果，代码量减少的同时，显得更简洁。
4. promise.then里的回调函数会放到相应宏任务的微任务队列里，等宏任务里面的同步代码执行完再执行；async函数表示函数里面可能会有异步方法，await后面跟一个表达式，async方法执行时，遇到await会立即执行表达式，然后把表达式后面的代码放到微任务队列里，让出执行栈让同步代码先执行。

### promise的使用
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

### 判断是否为数组
1.  isArray   推荐
```js
let arr = [];
console.log(Array.isArray(arr)) //true
``` 
2. Object.prototype.toString.call() 推荐
```js
let arr = [];
console.log(Object.prototype.toString.call(arr) === Object.prototype.toString.call([]))
```
3. arr.constructor
```js
console.log(arr.constructor === Array)
```