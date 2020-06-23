// 如何让if(a == 1 && a == 2)条件成立？
var a = {
  value: 0,
  valueOf: function() {
    this.value++;
    return this.value;
  },
  toString: function() {
    this.value++;
    return this.value;
  }
}
console.log(a == 1 && a == 2)
