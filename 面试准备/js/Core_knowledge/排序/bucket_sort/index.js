var arr = [1, 3, 2, 4, 3, 2, 5];

function bucketSort(nums) {
  // 创建一个数组里的最大值为长度的新数组，并全部为0
  const newArr = Array.from({length: 6}).fill(0);
  // 把数组里的数组在新数组表示出来
  nums.forEach(item => {
    newArr[item]++;
  })
  let res = [];
  for(let i = 0; i < 6; i++) {
    let j = i;
    while(newArr[j] !== 0) {
      res.push(j);
      newArr[j]--;
    }
  }
  return res;
}

console.log(bucketSort(arr))