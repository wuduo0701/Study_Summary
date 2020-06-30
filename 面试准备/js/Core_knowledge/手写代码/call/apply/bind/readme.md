## 手写call/apply/bind/new

### 手写call
```js
Function.prototype.mycall = function(context, ...args) {
  var context = context || window;
  // 1. 在目标对象中创建一个函数(把函数挂载到目标对象上)
  context.fun = this;
  // 2. 执行这个函数, 并传入参数
  context.fun(...args);
  // 3. 不希望这个对象多一个函数，删除掉
  delete context.fun;
}
```

### 手写apply
```js
Function.prototype.myapply = function (context, args) {
  let context = context || window;
  context.fn = this;
  let result = eval('context.fn(...args)');

  delete context.fn
  return result;
}
```

### 手写bind
```js
Function.prototype.myBind = function(context) {
  var self = this;
  return function() {
    return self.apply(context);
  }
}
```

### 手写new
```js
function _new(fn, ...arg) {
  // 创建了一个新对象,并把这个新对象和目标函数的原型链连接起来
  const obj = Object.create(fn.prototype);
  // 将构造函数指向这个对象,并传递参数
  const ret = fn.apply(obj, arg);
  // 返回原始值需要忽略，返回对象需要正常处理
  return ret instanceof Object ? ret : obj;
}
```