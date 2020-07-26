var arr = [{ age: 1 }, { age: 3 }, { age: 5 }, { age: 8 }, { age: 8 }, { age: 8 }]
//输出出现最多的数字和次数  8 3

function fun(arr) {
  let obj = {}, maxNum = 0, num = null;
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i].age]) {
      obj[arr[i].age]++
    } else {
      obj[arr[i].age] = 1
    }
    if (obj[arr[i].age] > maxNum) {
      num = arr[i].age;
      maxNum = obj[arr[i].age]
    }
  }
  console.log(obj)
  return `次数最多的元素为:${num}, 次数为:${maxNum}`;
}

console.log(fun(arr))