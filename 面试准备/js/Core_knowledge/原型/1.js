var myobject = {
  a: 2,
  print: function() {
    console.log('a + b =' + this.a + this .b)
  }
}
console.log(myobject.a)

// 创建一个新对象，把现有对象的prototype关联到新创建的对象
var AnotherObject = Object.create(myobject)

AnotherObject.b = 3
AnotherObject.print()
//  原型链上的属性
console.log(AnotherObject.__proto__)

// Object.prototype.__proto__ (访问器属性)不推荐使用，极其浪费性能

// 使用for...in 遍历对象时原理和查找原型链类似 
// 在原对象查找完属性后,会接着往原型链上继续查找,直到整条原型链被查找完
for(item in AnotherObject) {
  console.log(item)
}

AnotherObject.a = 5
console.log(AnotherObject.a)
