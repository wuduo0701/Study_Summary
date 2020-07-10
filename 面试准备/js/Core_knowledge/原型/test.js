function Parent(name, age) {
  this.name = name;
  this.age = age;
}
Parent.prototype.sex = [];

var p1 = new Parent('lin', 18);
p1.sex.push('a');
// push返回的是新的长度
// p1.sex.push('b');
console.log(p1.sex.push('b'));