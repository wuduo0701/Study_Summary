// function doSomething() {};
// console.log(doSomething.prototype);

// var doSomething = function(){}; 
// console.log(doSomething.prototype);

// doSomething.prototype.foo = 'bar';
// console.log(doSomething.prototype);


// var doSomeInstancing = new doSomething();
// console.log( doSomeInstancing );
// doSomeInstancing.prop = "some value"; // add a property onto the object
// console.log( doSomeInstancing );
// 全局
global.Object.prototype.sex = '超人';

function People(name, age) {
  this.name = name;
  this.age = age;
}

var p1 = new People('朵雾', '20');
console.log(p1.__proto__);
console.log(p1.sex);
p1.sex = '女'
console.log(p1.sex);
console.log(p1.__proto__.__proto__);


var p2 = Object.create(People);
console.log(p2.__proto__ === p1.constructor);
console.log(p1.constructor)
