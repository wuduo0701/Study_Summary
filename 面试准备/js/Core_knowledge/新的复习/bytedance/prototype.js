// 题目五： 原型链的继承，实现构造函数B继承于A，
// 构造函数A
// - 函数签名：const a = new A(name);
// - 实例属性name  // 字符串
// - 原型对象属性有一个run方法
// - function () { console.log(`${this.name} run`); }

// 构造函数B
// - 函数签名：const b = new B(name, email);
// - 实例对象拥有A的所有实例属性
// - 实例对象自定义一个email属性  // 字符串
// - 原型对象继承于A
// - 原型对象上自定义一个swim方法

function A(name) {
  this.name = name;
}

A.prototype.run = function() {
  console.log(`${this.name} run`);
}

function B(name, email) {
  // this.name = new A(name);
  A.call(this, name);
  this.email = email;
}
// 简单的继承
B.prototype = A.prototype;

// B.prototype = Object.create(A.prototype);
// B.prototype.constructor = A;

B.prototype.swim = function() {
  console.log(this.name, this.email);
}
const a = new A('lin');
a.run();

const b = new B('name', 'email');
b.run();
b.swim();
