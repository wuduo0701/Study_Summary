// es5的写法，通过构造函数和原型链来写类
function Ponit1(x, y) {
  this.x = x;
  this.y = y;
}
Ponit1.prototype.showPoint = function() {
  return '(' + this.x + ',' + this.y + ')';
}
var p1 = new Ponit1(2, 3);
console.log(p1.__proto__.showPoint)
console.log(p1.showPoint());
// es6类的写法
class Ponit2 {
  // 这就是构造方法，相当于构造函数
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  showPoint() {
    return '(' + this.x + ',' + this.y + ')';
  }
  name() {
    return Ponit2.name
  }
}

var p2 = new Ponit2(2, 3);
console.log(p2.__proto__.showPoint)
console.log(p2.showPoint());
console.log(p1.__proto__.showPoint === p2.__proto__.showPoint)  //false
// es5的函数都是定义构造函数的prototype上
console.log(typeof(Ponit2.constructor))   //function 函数，表示constructor是函数
// es6的class内的函数都是定义在类的prototype上
console.log(Ponit2.prototype.showPoint)
//类本身就指向构造函数。
console.log(Ponit2.prototype.constructor === Ponit2)
