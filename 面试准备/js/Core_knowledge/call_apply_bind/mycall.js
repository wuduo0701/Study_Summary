var a = {
  name: 'lin'
}
var name = 'jia'
function showName() {
  console.log(this.name);
}
showName.call(a);

// call应该所有函数都可以调用，所以在Funcation.prototype上
// 1. 改变this指向，指向传入的第一个参数
// 2. 可以传很多参数
// 3. 根据参数，执行函数

Function.prototype.mycall = function(context, ...args) {
  var context = context || window;
  // 1. 在目标对象中创建一个函数(把函数挂载到目标对象上)
  context.fun = this;
  // 2. 执行这个函数, 并传入参数
  context.fun(...args);
  // 3. 不希望这个对象多一个函数，删除掉
  delete context.fun;
}

showName.mycall(a)