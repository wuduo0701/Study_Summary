## Class
ES6 的class类可以看成一个语法糖，大部分功能es5都可以做到。class写法只是让对象原型的写法更加清晰
```js
// es5的写法，通过构造函数和原型链来写类
function Ponit1(x, y) {
  this.x = x;
  this.y = y;
}
Ponit1.prototype.showPoint = function() {
  return '(' + this.x + ',' + this.y + ')';
}
// es6类的写法
class Ponit2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  showPoint() {
    return '(' + this.x + ',' + this.y + ')';
  }
}

// es6的class内的函数都是定义在类的prototype上
console.log(Ponit1.prototype.showPoint)
// es6的class内的函数都是定义在类的prototype上
console.log(Ponit2.prototype.showPoint)
//类本身就指向构造函数。这与es5中的写法类似
console.log(Ponit2.prototype.constructor === Ponit2)  //true
```
- constructor
constructor是类的默认方法，通过new命令生成实例时，自动调用该方法

- 私有方法和属性的实现方案
es6不提供这种方法，只有通过变通方法模拟
1. 在命名前加以区别，在函数名前加 _ ,表示他是私有方法，但是外部还是可以调用到这个方法
2. 将私有方法移除类的模块，因为模块中中的所有方法都是可见的。