function People(name, age) {
  this.name = name;
  this.age = age;
}

let p1 = new People('小红', 18);
console.log(p1.__proto__);

People.sex = '男';
People.prototype.sex = '女';
console.log(People.sex);
console.log(People.prototype.sex);

console.log(p1.sex)