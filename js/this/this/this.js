/**
 * this 永远指向最后调用它的对象,并不是创建的时候指定的
 */

// var name = "windowsName";
// function a() {
//   var name = "Cherry";
//   console.log(this.name);          // windowsName(在非严格模式上，严格模式为undefined)
//   console.log("inner:" + this);    // inner: Window
// }
// a();
// console.log("outer:" + this)         // outer: Window

var name = "windowsName";
var a = {
    name: "Cherry",
    fn : function () {
        console.log(this.name);      // Cherry
    }
}
// this 永远指向最后调用它的对象,
var f = a.fn;
f();


