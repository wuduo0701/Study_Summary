## this
es5 普通函数

- 默认指向全局  window
- 对象.foo 谁调用foo指向谁
- call/apply/bind 第一个参数
- new

优先级
new > call/apply/bind > 对象.foo > 全局

## bind

```
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
```