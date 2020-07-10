function Father(){
	this.property = true;
}
Father.prototype.getFatherValue = function(){
	return this.property;
}
function Son(){
	this.sonProperty = false;
}
console.log(Son.prototype)
//继承 Father
Son.prototype = new Father();//Son.prototype被重写,导致Son.prototype.constructor也一同被重写
console.log(Son.prototype)
Son.prototype.getSonVaule = function(){
	return this.sonProperty;
}
var instance = new Son();
console.log(instance.getFatherValue());//true
console.log(instance.__proto__)

// instanceof  检测构造函数的 prototype 属性是否出现在某个实例对象的原型链
console.log(instance instanceof Son)

//  isPrototypeOf 测试一个对象是否存在于另一个对象的原型链上。

// instance实例是否在Son构造函数的原型链上
console.log(Son.prototype.isPrototypeOf(instance))  
