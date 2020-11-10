/**
 * 合并区间
 */

const arr = [[10,30],[20,60],[80,100],[150,180]];

function merge( intervals ) {
  const res = [];
  if(intervals.length < 2) {
    return intervals;
  }
  if(intervals.length === 0) {
    return [];
  }
  // 以每个数组的第一位排号序
  intervals.sort((a, b) => {
    return a[0] - b[0];
  })
  res.push(intervals[0]);
  for(let i = 1; i < intervals.length; i++) {
    if(res[res.length - 1][1] < intervals[i][0]) {
      res.push(intervals[i]);
    } else {
      if (res[res.length - 1][1] < intervals[i][1]) {
        res[res.length - 1][1] = intervals[i][1];
      }
    }
  }
  return res;
}

console.log(merge(arr));