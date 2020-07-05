var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

var str = arr.toString();
let res = [];
str.split(",").map(item => {
  return res.push(Number(item));
})
console.log(res);

var fun = function(arr) {
  let str = arr.toString();
  let result = [];
  str = str.split(",").map(item => {
    return +item;
  })
  // console.log(str);
  for(let i = 0; i < str.length; i++) {
    if(result.indexOf(str[i]) === -1) {
      result.push(str[i]);
    }
  }
  return result.sort((a, b) => {
    return a - b;
  });
}
console.log(fun(arr))