function Page() {
  console.log(this)
  return this.hosts;
}
Page.prototype.hosts = ['h11111'];
Page.prototype.hosts = ['h22222'];

//当代码 new Foo(...) 执行时
// 一个继承自Foo.prototype的新对象被创建
var p1 = new Page();

console.log(p1);  //这里输出h22222