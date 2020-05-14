var times = 100000;
var res = {};
function shuffle(a) {
  for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
}
for (var i = 0; i < times; i++) {
    var arr = shuffle([0, 1]);

    var key = JSON.stringify(arr);
    res[key] ? res[key]++ :  res[key] = 1;
}

// 为了方便展示，转换成百分比
for (var key in res) {
    res[key] = res[key] / times * 100 + '%'
}

console.log(res)