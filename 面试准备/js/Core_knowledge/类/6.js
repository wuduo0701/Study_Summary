function Parent(name, age) {
  this.name = name;
  this.age = age;
}
Parent.prototype.name = 'ss';
Parent.prototype.a  = [];


var p1 = new Parent('lin', 18)

p1.a.push(1)
console.log(p1.__proto__.name)