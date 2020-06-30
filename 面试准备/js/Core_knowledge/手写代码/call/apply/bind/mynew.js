// new 之后发生了什么
// 1. 新定义一个 json 对象
// 2. 对象 继承 构造函数的原型链
// 3. 将构造函数的 this 指向这个对象
// 5. 根据构造函数的返回值类型返回结果，

// 手写new方法
function _new(fn, ...arg) {
  // 创建了一个新对象,并把这个新对象和目标函数的原型链连接起来
  const obj = Object.create(fn.prototype);
  // 将构造函数指向这个对象,并传递参数
  const ret = fn.apply(obj, arg);
  // 返回原始值需要忽略，返回对象需要正常处理
  return ret instanceof Object ? ret : obj;
}

function mynew(func, ...args) {
  let obj = {};
  // 将空对象指向构造函数的原型链
  Object.setPrototypeOf(obj, func.prototype);
  // obj 绑定到构造函数上，便可以访问构造函数中的属性
  let result = func.apply(obj, args);
  // 如果返回的 result 是一个对象则返回该对象，new 方法失效，否则返回 obj
  return result instanceof Object ? result : obj;
}
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person('lin', 12);
const p2 = _new(Person, 'jia', 33);
const p3 = mynew(Person, 'hao', 20);
console.log(p1);
console.log(p2);
console.log(p3);