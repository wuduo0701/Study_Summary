// var name = "windowsName";
// var a = {
//   name : "Cherry",
//   func1: function () {
//       console.log(this.name)     
//   },
//   func2: function () {
//     //setTimeout是全局对象，但在全局中并没有fun1函数，会报错
//     setTimeout(  function () {
//       this.func1()
//     },100);
// }
// };
// a.func2()     // this.func1 is not a function
var a ={
  name : "Cherry",
  fn : function (a,b) {
    console.log( a + b)
  },
  fn1 : function () {
    console.log(this.name)
  }
}
var b = a.fn;
var b1 = a.fn1;
b1.bind(a)();  //Cherry
b.bind(a,1,2)()   // 3