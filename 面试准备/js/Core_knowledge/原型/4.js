function People(name, age) {
  this.name = name,
  this.age = age
}
People.sex = '男'
//实例化
let p1 = new People('朵雾', 20)

console.log(People)
console.log(p1) //  对象

console.log(p1.sex)   //undefined 实例无法访问属性
console.log(People.age); //undefined     通过构造函数无法直接访问实例成员
console.log(People.sex);  //男       通过构造函数可直接访问静态成员


function Star(age) {
  // 构造函数直接定义方法
  this.name = function() {
    console.log('朵雾')
  },
  this.age = age
}
// 通过原型分配的函数
Star.prototype.sex = function() {
  console.log('男')
}
//通过new 实例
let s1 = new Star();
let s2 = new Star();
// 构造函数直接定义方法不共享
console.log(s1.name === s2.name)    //false
// 通过原型链定义的函数共享
console.log(s1.sex === s2.sex)  //true



