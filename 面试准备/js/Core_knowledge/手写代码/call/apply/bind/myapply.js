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

Function.prototype.myapply = function (context, args) {
  let context = context || window;
  context.fn = this;
  let result = eval('context.fn(...args)');

  delete context.fn
  return result;
}
showName.myapply(a)