// let a = [];
// //为什么可以调用到push方法呢?
// // push在 Array.prototype.push  原型链上
// a.push();
// function isType(type, data) {
//   type = `[object ${type}]`
//   return Object.prototype.toString.call(data) === type;
// }
// const isArrayType = isType.bind(null, 'Array')
// console.log(isArrayType(a))
// console.log(isType('Array', a))


function Animal(name, color) {
  this.name = name;
  this.color = color;
}
Animal.prototype.say = function () {
  return `I'm a ${this.color} ${this.name}`;
};
const Cat = Animal.myBind(null, 'cat');
const cat = new Cat('white');
// cat 
if (cat.say() === 'I\'m a white cat' &&
  cat instanceof Cat && cat instanceof Animal) {
  console.log('success');
}