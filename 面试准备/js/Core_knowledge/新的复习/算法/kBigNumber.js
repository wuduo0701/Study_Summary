/**
 * 数组中第k大的数
 */

const arr = [1,3,5,2,2];
function findKth(a, n, k) {
  if(a.length <= 0) return null;

  function quick(a, n) {
    if(a.length <= 0) return a;
    let left = [], right = [], flag = a[0];
    for(let i = 1; i < n; i++) {
      if(i < a.length) {
        if(a[i] <= flag) {
          left.push(a[i]);
        } else {
          right.push(a[i]);
        }
      }
    }
    return quick(left, n).concat(flag, quick(right, n));
  }
  quick(a, n);
  return a[k];
}

console.log(findKth(arr, 5, 3));

