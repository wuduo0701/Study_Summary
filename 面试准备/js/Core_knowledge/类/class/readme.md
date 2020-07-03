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
3. 利用symbol属性

### 继承
es6的继承用extends关键字，es5是通过修改原型链的方式实现继承

- super关键字
表示调用父类的属性或方法
1. 子类必须在constructor方法中调用super方法，否则新建实例时会报错。
2. es5的继承实际上是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。
  es6的继承是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。
3. 子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错
```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    this.color = color; // ReferenceError
    super(x, y);
    this.color = color; // 正确
  }
}
```
4. super可以作为函数或者对象被使用，作为函数时只能用在构造函数之中，作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。