function shuffle(a) {
  for (let i = a.length; i > 0; i--) {
    //  随机乱序
    let j = Math.floor(Math.random() * i);
    // 交换数据
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
}

var arr = [1, 2, 3, 4, 5, 6];
arr.sort(function() {
  return Math.random() - 0.5;
})
console.log(arr)
// console.log(shuffle(arr));