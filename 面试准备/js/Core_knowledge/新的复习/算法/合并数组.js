// 合并两个数组去重

const fun = (arr1, arr2) => {
  let newArr = [...arr1, ...arr2];
  newArr = [...new Set(newArr)];
  return newArr;
}

const arr1 = [1, 2, 3, 4, 5], arr2 = [3, 3, 4, 2];
console.log(fun(arr1, arr2));