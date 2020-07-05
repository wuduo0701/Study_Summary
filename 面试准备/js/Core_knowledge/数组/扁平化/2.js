var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

var str = arr.toString();
let res = [];
str.split(',').map(item => {
  if(res.indexOf(Number(item)) === -1) {
    res.push(Number(item));
  }
})


console.log(res.sort((a, b) => a - b));