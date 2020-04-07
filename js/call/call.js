// 手写一个call

// function foo(something) {
//   console.log(this.a, something);   //2, 3
//   return this.a + something;
// }

// var obj = {
//   a: 2
// }

// function bar(){
//   // js没有函数重载功能，arguement模拟了重载,是一个类数组，型似数组，但不是数组
//   //arguement里面引用了函数的实参，
//   console.log(arguments)  //实参3，输出为3
//   return foo.apply(obj, arguments);
// }
// var b = bar(3)
// console.log(b)

//变更函数调用者示例
function foo() {
  console.log(this.name)
}

// 测试
const obj = {
  name: '朵雾'
}
obj.foo = foo   // 变更foo的调用者
obj.foo()       // '写代码像蔡徐抻'

var name = 'yunyan'
// Function.prototype.mycall = function(thisobj, ...args){    //简单版本
//   thisobj.fn = this;    //this指向调用call的对象
//   return thisobj.fn(...args);   //执行函数并return结果
// }
Function.prototype.mycall = function(thisobj, ...args) {
  // if(typeof thisobj !== 'function'){
  //   throw new Error(thisobj + 'is not a function')
  // }
  //每一个symbol属性都是唯一的 Symbol('fn') === Symbol('fn')为false
  const fn = Symbol('fn');  //声明一个独有的Symbol属性，防止fn被覆盖
  thisobj = thisobj || window;  //落没有传入this，则默认为window对象
  thisobj.fn = this              // this指向调用call的对象,即我们要改变this指向的函数
  const result = thisobj.fn(...args)  // 执行当前函数
  delete thisobj.fn              // 删除我们声明的fn属性
  return result  
}
foo.mycall(obj)
foo.call(obj)