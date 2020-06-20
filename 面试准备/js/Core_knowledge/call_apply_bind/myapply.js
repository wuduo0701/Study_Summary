// 所有函数都能调用到，所以定义在Function.prototype
// 1. 改变this指向，指向第一个参数
// 2. 必须传一个数组
// 3. 执行函数

var a = {
  name: 'lin'
}
function showName() {
  console.log(this.name);
}

Function.prototype.myapply = function(context, ...args) {
  context.fun = this;
  context.fun(...args);
  delete(context.fun);
}
showName.myapply(a)