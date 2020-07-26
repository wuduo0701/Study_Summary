var arr1 = [[1, 2, 4], [1, 2, 3], [1, 3, 4], [1, 3, 2]];
let newArr = [];
for(let i = 0; i < arr1.length; i++) {
  newArr.push(arr1[i].join(''))
}
newArr.sort();
let res = [];

for(let j = 0; j < newArr.length; j++) {
  res.push(newArr[j].split(''));
}

console.log(newArr)

