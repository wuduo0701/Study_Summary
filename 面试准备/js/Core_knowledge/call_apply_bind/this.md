## this指向
1. 基本的使用是：谁调用的就指向谁。
2. 作为普通函数时，指向window全局
3. 构造函数new一个实例的时候，指向new的实例
4. 箭头函数使用，this指向当前最近的非箭头函数的this，找不到就是window

### 改变this指向
1. 使用apply/call/bind改变
- apply/call
apply/bind在改变this指向的时候会把函数执行掉
call是希望参数一个一个传入，apply是希望参数以数组的形式传递
```js
fn.call(target, arg1, arg2);
fn.apply(target, [arg1, arg2]);
```
- bind
```js
// 生成新函数
fn.bind(target, arg1, arg2);
```
2. 手写apply/call/bind
- 手写apply
```js
// call应该所有函数都可以调用，所以在Funcation.prototype上
// 1. 改变this指向，指向传入的第一个参数
// 2. 可以传很多参数
// 3. 根据参数，执行函数
Function.prototype.mycall = function(context, ...args) {
  // 1. 在目标对象中创建一个函数(把函数挂载到目标对象上)
  context.fun = this;
  // 2. 执行这个函数, 并传入参数
  context.fun(...args);
  //  3. 不希望这个对象多一个函数，删除掉
  delete context.fun;
}
```
- 手写apply
```js

```
改变this的指向，并且生成一个新的函数
2. 使用箭头函数
3. new一个实例化对象
4. 使用that = this的形式