Array.prototype._indexOf = function(item, start) {
  //查找的数组下标，未找到则为-1
  let index = -1;
  if(start === undefined) {
    start = 0;
  }
  for(let i = start; i < this.length; i++) {
    // 找到了该值，index变为它的下标
    if(item === this[i]) {
      index = i;
      return index;
    }
  }
  // 如果为找到就直接返回idnex
  return index;
}

var arr = [1, 2, 3, 4];
console.log(arr._indexOf(3, 0));