// new的四步骤
// 1. 创建一个新的对象
// 2. 将构造函数的作用域(this绑定)赋给新对象
// 3. 执行构造函数的代码(为这个新对象添加属性)
// 4. 返回这个新对象

function Person(name){
  this.name = name;
}
// var name1 = new Person('小明');
// console.log(name1);
// 模拟new
function _new(){
  let target = {};    //1.创建一个新对象
  let [constructor, ...args] = [...arguments];  //第一个为构造函数
  // 2.  原型链链接，绑定this
  // __proto__不推荐使用了，是一个属性访问器，挂载在他的属性上
  target.__proto__ = constructor.prototype;
  // 3. 将构造函数的属性和方法添加到新对象上
  let result = constructor.apply(target, args);
  if(result && (typeof result == "object" || typeof result == "function")){
    // 如果构造函数返回的结果是一个对象，就返回这个对象
    return result;
  }
  // 如果构造函数返回的不是一个对象，就返回创建的新对象。
  return target;
}

function _new1(constructor, ...args){
  let target = {};  //1.定义新对象
  // 2. 绑定this指向，构造函数的作用域付给新对象
  target.prototype = constructor.prototype;
  // 3. 为这个新对象添加属性和方法
  let result = constructor.apply(target.prototype, args);
  // 4. 返回这个新对象
  if(result && (typeof result == "object" || typeof result == "function")){
    // 如果构造函数返回的结果是一个对象，就返回这个对象
    return result;
  }
  // 如果构造函数返回的不是一个对象，就返回创建的新对象。
  return target.prototype;
}
let name2 = _new1(Person, '小花')
console.log(name2)