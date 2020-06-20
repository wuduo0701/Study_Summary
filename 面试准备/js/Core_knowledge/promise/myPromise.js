// 手写一个Promise

// 1. 必须接收一个executor作为入参
// 2. 具备pending, fulfilled,rejected三种状态

function myPromise(executor) {
  // 记录成功执行后的结果
  this.value = null;
  // 记录失败的原因
  this.reason = null;
  // 记录当前的状态，当前状态为pending
  this.status = 'pending';

  // // 缓存两个队列，维护 resolved 和 rejected 各自对应的处理函数
  // this.onResolvedQueue = [];
  // this.onRejectedQueue = [];

  // 记录this，后面会用到
  var self = this;
  // 定义resolve函数
  function resolve(value) {
    // 如果是 pending 状态，直接返回
    if (self.status !== 'pending') {
      return;
    }
    // 异步成功，结果赋值给value
    self.value = value;
    // 切换状态为fulfilled
    self.status = 'fulfilled';

    // // 用 setTimeout 延迟队列任务的执行
    // setTimeout(function(){
    //   // 批量执行 resolved 队列里的任务
    //   self.onResolvedQueue.forEach(resolved => resolved(self.value)); 
    // });
  }
  // 定义rejected函数
  function reject(reason) {
    // 如果是 pending 状态，直接返回
    if (self.status !== 'pending') {
      return;
    }
    // 异步失败，原因赋值给value
    self.reason = reason;
    // 切换状态为rejected
    self.status = 'rejected';
    // setTimeout(function(){
    //   // 批量执行 rejected 队列里的任务
    //   self.onRejectedQueue.forEach(rejected => rejected(self.reason));
    // });
  }
  
  executor(resolve, reject);
}

// 定义promise上的.then方法

// .then接收两个函数作为参数
myPromise.prototype.then = function(onResolved, onRejected) {
  // 接收的两个参数必须为函数，如果不是就用透传来透底
  if(typeof onResolved !== 'function') {
    onResolved = function(x) {return x};
  }
  if(typeof onRejected !== 'function') {
    onRejected = function(err) {throw err};
  }
  //依然报存this
  var self = this;
  // 如果是resolved后的状态
  if(self.status === 'fulfilled') {
    onResolved(self.value);
  } else if (self.status === 'rejected') {
    // 如果是rejected后的状态
    onRejected(self.reason);
  } 
  // else if (self.status === 'pending') {
  //   // 若是 pending 状态，则只对任务做入队处理
  //   self.onResolvedQueue.push(onResolved);
  //   self.onRejectedQueue.push(onRejected);
  // }
  // return this;
}

new myPromise(function(resolve, reject){
  resolve('成了！');
}).then(function(value){
  console.log(value);
}, function(reason){
  console.log(reason);
});