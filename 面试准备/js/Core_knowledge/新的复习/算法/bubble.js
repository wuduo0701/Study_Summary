const arr = [1, 3, 2, 4, 6, 5, 10];
let len = arr.length;

function bubble(arr, len) {
  if(len <= 1) return arr;
  for(let i = 0; i < len; i++) {
    // var flag = false;
    for(let j = i; j < len - i -1; j++) {
      if(arr[j] > arr[j+1]) {
        // flag = true;
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  // if(!flag) return arr;
  return arr;
}

console.log(bubble(arr, len));