/**
 * 函数柯里化
 */
// 将接受多个参数的函数转化成单一参数的函数，并且返回接受余下的参数而且返回结果的新函数

// add(2,3,4)=9
function add1(x, y, z) {
  return x + y + z;
}
console.log(add1(2, 3, 4));

// add(2)(3,4)=9
function add2(x) {
  return function(y, z) {
    return x + y + z;
  }
}
console.log(add2(2)(3, 4));

// add(2)(3)(4)
function add3(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    }
  }
}
console.log(add3(2)(3)(4));

// add(2,3)(4)=9
function add4(x, y) {
  return function(z) {
    return x + y + z;
  }
}
console.log(add4(2, 3)(4));

// 函数柯里化的主要作用和特点就是参数复用、提前返回和延迟执行。
function curry(fn, args) {
  var length = fn.length;
  var args = args || [];
  return function(){
    newArgs = args.concat(Array.prototype.slice.call(arguments));
    if (newArgs.length < length) {
      return curry.call(this, fn, newArgs);
    }else{
      return fn.apply(this,newArgs);
    }
  }
}

function multiFn(a, b, c) {
  return a+b+c
}
var multi = curry(multiFn);

console.log(multi(1)(2)(3));
console.log(multi(1)(2, 3));
console.log(multi(1, 2, 3));