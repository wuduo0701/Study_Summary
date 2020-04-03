function foo() {
  a = 2
  console.log(this.a)
}
let obj = {
  a: 1,
  foo
}

function Bar() {
  this.a = 123
}
// this 会指向bar,隐式绑定
const bar = new Bar()
console.log(bar.a)
foo.call()
foo.apply()
// foo.bind()
//哪个对象调用这个函数 ,就指向哪里
obj.foo()