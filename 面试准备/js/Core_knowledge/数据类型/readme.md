## js数据类型

### js原始数据类型和引用数据类型
- 原始数据类型
1. number
2. string
3. boolean
4. null
5. undefined
6. symbol
7. bigint
- 引用类型
Objectd对象(普通对象object, 数组Array, 函数Function, 正则对象RegExp， 日期对象Data， 数学函数Math)
```js
function test(person) {
  person.age = 20;
  person = {
    name: "Horace",
    age: 18
  }
  return person;
} 
const p1 = {
  name: "Bin",
  age: "19"
}
const p2 = test(p1);
console.log(p1);  //{ name: 'Bin', age: 20 }
p1作为实传进test函数的时候，传的是p1的堆内存的地址，函数调用person.age会改变p1.age的值
console.log(p2);  //{ name: 'Horace', age: 18 }
p2返回的是新创建的person对象，不同于传进来的实参p1
```
### null是对象吗
null不是对象，虽然typeof(null)是对象，但是null本身不是对象，null是原始数据的一种，对象(obejct， Array, Function, RegExp, Math,Data这几种)，这是js存在的一个历史悠久bug。在 JS 的最初版本中使用的是 32 位的系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表的是对象，而 null 表示为全空，所以将它错误地判断成了 object。

对象的类型标签是 0。由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null 的类型标签是 0，typeof null 也因此返回 "object"
可以用 instanceof 进行判断 或者使用 Object.prototype.toString.call(null)
```js
let a = {
  c : 1,
};
function b() {
  return 1;
}
// 这些都为Object对象
console.log(a instanceof Object); //true
console.log(b instanceof Object); //true
console.log([] instanceof Object);  //true
//null的判断
console.log(null instanceof Object);  //false
Object.prototype.toString.call(null); //[object Null]
```

### '1'.toString()为什么可以调用
这里发生了三个过程
```js
1. 创建Object类的实例，这里有个疑问，为什么是这里是new Object而不是new String
A&: 由于基本类型数据出现了Symbol 和 BigInt，对他们new会报错
var s = new Object('1'); 
2. 调用实例方法s.toSting()
s.toString();
3. 执行完就销毁实例
s = null;
```
整个过程体现了基本包装类型的性质，而基本包装类型属于基本数据类型，除此之外还包括number，boolean，null
这页验证了Object.prototype.toSting(null)是基本类型，而不是引用类型对象

### 0.1 + 0.2 为什么不等于0.3
ECMAScript 采用的是IEEE二进制浮点数算术标准，双精度的方法（64个字节）来存储一个浮点数，由于位数的限制，后面多余的为啥会被截掉，此时就可能会出现精度第损失，相加后由于位数的限制截取了一部分二进制数，在此转化为十进制数时就导致了变成
0.30000000000000004

### typeof
typeof可以检测的数据类型为number，string，boolean，undefined，symbol，bigInt，   Array， Object，  
即原始数据类型可以检测除了null的值，引用类型除了Function的类型数据

typeof对于检测数据类型并不合适，可以用instanceof更好，它是用于检测原型链的，只要处于原型链中，就会被判断为true
```js
const Person = function() {}
const p1 = new Person()
p1 instanceof Person // true

var str1 = 'hello world'
str instanceof String // true
```

### 类型转化
- js中，类型转换只有三种
1. 转化成数字
2. 转化成布尔值 
3. 转化成字符串

### 如何让if(a == 1 && a == 2)条件成立？
```js
var a = {
  value: 0,
  valueOf: function() {
    this.value++;
    return this.value;
  },
  toString: function() {
    this.value++;
    return this.value;
  }
}
```
