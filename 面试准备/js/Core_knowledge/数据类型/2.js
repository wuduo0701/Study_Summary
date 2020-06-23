// null是对象吗
let a = {
  c : 1,
};
function b() {
  return 1;
}
console.log(a instanceof Object); //true
console.log(b instanceof Object); //true
console.log([] instanceof Object);  //true

console.log(null instanceof Object);  //false