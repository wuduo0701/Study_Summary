// 父类
function Parent(name, age) {
  this.name = name;
  this.age = age;
}
// 子类
function Son(name, age, sex) {
  this.sex = sex;
  // 通过call继承
  Parent.call(this, name, age);
}

Parent.prototype.say = function() {
  console.log('hello');
}

// 实现继承
Son.prototype = Object.create(Parent.prototype);
Son.prototype.constructor = Parent;


var p1 = new Parent('lin', 18);
var s1 = new Son('jia', 20, '男');
// 可以调用父类方法
s1.say()

console.log(s1);

console.log(Parent.prototype === p1.__proto__);
console.log(p1.__proto__.constructor === Parent)
console.log(Parent.prototype.constructor === Parent)


