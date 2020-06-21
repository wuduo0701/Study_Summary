function throttle(fn) {
  //  定义一个标志为true
  let flag = true;
  return function() {
    // 如果为flag为false，直接return
    if(!flag) return;
    // 不是的话又设为false
    flag = false;
    setTimeout(() => {
      fn.call(this, arguments);
      // 又设为true
      flag = true;
    }, 500)
  }
}