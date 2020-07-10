/**
 * 桶排序
 * arr 数组
 * 缺点: 需要提前知道最大值和最小值
 */
var arr = [6, 8, 3, 9, 1, 2, 5];

function bucketSort(arr) {
  const newArray = Array.from({length: 10}).fill(0);
  arr.forEach(item => {
    newArray[item] ++;
  })

  // for(let i = 0; i < 10; i++) {
  //   let j = i;
  //   while(newArray[j] != 0) {
  //     a.push(j)
  //     newArray[j]--;
  //   }
  // }
  // return a;
  return newArray.reduce((pre, item, index) => {
    for(let i = item; i; i--) {
      pre.push(index);
    }
    return pre;
  }, [])
}
console.log(bucketSort(arr))

