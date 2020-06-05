## prototype 原型链

1. Object.create 把现有对象prototype属性关联到新创建的对象

2. __proto__ (访问器属性)不推荐使用，极其浪费性能

3. 使用for...in 遍历对象时原理和查找原型链类似 在原对象查找完属性后,会接着往原型链上继续查找,直到整条原型链被查找完

```js
for(item in AnotherObject) {
  console.log(item)
}
```

4. instanceof  检测构造函数的 prototype 属性是否出现在某个实例对象的原型链
   isPrototypeOf 测试一个对象是否存在于另一个对象的原型链上。
```js
console.log(instance instanceof Son)
console.log(Son.prototype.isPrototypeOf(instance))
```

缺点: 
1.  如果使用的值是引用类型的时候,该值会被所有实例共享
2.  在创建子类型(son)时不能向父类型(father)的构造函数传递参数


## 构造函数
- 两种成员
1. 实例成员
  在构造函数内部,通过this添加成员, 只能通过实例过后的成员访问
2. 静态成员 
  在构造函数本身添加的成员, 只能通过函数本身来访问

```js
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
console.log(People.name); //People     通过构造函数无法直接访问实例成员
console.log(People.sex);  //男       通过构造函数可直接访问静态成员
```

- new 之后发生了什么
1. 创建一个空对象
2. 链接两个对象的prototype原型链
3. 将构造函数的this执向新对象
4. 执行对象里的函数,为新对象赋值
5. 返回这个新对象

- 构造函数的规则
  公共属性定义放在构造函数里,公共函数放在原型链上
```js
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
```

- 原型
1. Function.prototype 就是原型,也是对象,所以称之为原型对象

