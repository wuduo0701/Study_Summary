/**
 * 丢棋子问题(https://www.nowcoder.com/practice/d1418aaa147a4cb394c3c3efc4302266?tpId=190&&tqId=35592&rp=1&ru=/ta/job-code-high-rd&qru=/ta/job-code-high-rd/question-ranking)
 * 解决问题(https://www.cnblogs.com/willwuss/p/12256475.html)
 * n 楼层数
 * k 棋子数
 * 1 <= i <= n
 */

// 暴力法
function losePieces1(n, k) {
  // 楼层为0时，返回0
  if (n === 0 ) return 0;
  // 只有一个棋子，最坏情况就是n楼
  if (k === 1) return n;
  let min = 999999;
  for(let i = 1; i <= n; i++) {
    min = Math.min(min, Math.max(losePieces1(i-1, k-1), losePieces1(n-i, k)));
  }
  return min+1;
}

console.log(losePieces1(10, 1));
console.log(losePieces1(3, 2));
console.log(losePieces1(105,2));
