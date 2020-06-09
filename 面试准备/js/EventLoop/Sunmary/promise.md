## event loop 同步任务和异步任务  宏任务和微任务
js是单线程的程序

### 任务队列

1. js分为同步任务和异步任务
2. 同步任务都在主线程上执行，形成一个执行栈
3. 主线程外，事件触发线程管理着一个任务队列，只要异步任务有了结果，就会在任务队列中放置一个事件
4. 一旦所有同步任务执行完成，系统就会读取任务队列，将可执行的异步任务添加到可执行栈中，开始执行

### 宏任务((macro)task)
- 每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）。
- 浏览器为了能够使得JS内部task与DOM任务能够有序的执行，会在一个task执行结束后，在下一个 task 执行开始前，对页面进行重新渲染 （task->渲染->task->...）

❗ setTimeout的作用是等待给定的时间后为他的回调产生一个宏任务，这也总是setTimeout里最后执行
❗ async函数中在await之前的代码是立即执行的

宏任务举例：script(整体代码)、setTimeout、setInterval、I/O、UI交互事件、postMessage、MessageChannel、setImmediate

### 微任务
- 微任务通常来说就是需要在当前 task 执行结束后立即执行的任务
- 所有微任务总会在下一个宏任务之前全部执行完毕。
```js

console.log('script start');

setTimeout(function() {
  //产生一个宏任务
  console.log('setTimeout');  
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');

// script start
// script end
// promise1
// promise2
// setTimeout
```