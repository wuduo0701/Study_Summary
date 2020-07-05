var arr = [1, 3, 3, 2, 3, 3, 4, 2, 1];
// 1. 利用Set去重
arr = [...new Set(arr)];

// 2. 创建一个新数组，循环判断
var newArr = [];
for(let i = 0; i < arr.length; i++) {
  if(newArr.indexOf(arr[i]) === -1) {
    newArr.push(arr[i]);
  }
}

Array.prototype._indexOf = function(item,start){
  //  初始为-1
  var index = -1;
  // 如果start未赋值，则将start赋值为0
  if(start == undefined){
    start = 0;
  }
  for(let i = start ; i < this.length ; i++){
    if (this[i] === item) {
      index = i;
      return index;
    }
  }
  return index;
}
console.log(newArr._indexOf(2));