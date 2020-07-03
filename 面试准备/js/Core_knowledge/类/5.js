function Parent(name, age) {
  this.name = name;
  this.age = age;
}
function Son(name, age, sex) {
  this.sex = sex;

  // call/apply/bind 实现继承

  // Parent.call(this, name, age);
  // Parent.apply(this, [name, age]);
  Parent.bind(this, name, age)();
}

var p1 = new Parent('lin', 18);
var s1 = new Son('lin', 18, '男');

console.log(s1)