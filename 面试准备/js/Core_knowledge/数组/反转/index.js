// 不用数组api和使用新数组反转数组
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function reverse(arr) {
  const Len = arr.length - 1;
  const privot = Math.floor(arr.length / 2);  //求出中间的位置
  for(let i = 0; i < privot; i++) {
    [arr[i], arr[Len - i]] = [arr[Len - i], arr[i]]
  }
  return arr;
}

console.log(reverse(arr))