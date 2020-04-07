const obj = {
  name : "朵雾"
}
let name = "云烟"
// console.log(this)    指向window，全局
function foo(){
  // this.name 
  // console.log(this)  
  console.log(this.name)
}
function bar() {
  foo.call(obj)   //this被绑定到obj上，显示obj.name
} 
// obj.foo = foo;
// // obj.foo()
bar()
// console.log(this)
// bar.call(this)