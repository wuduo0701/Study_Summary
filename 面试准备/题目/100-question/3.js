// 防抖 
function debounce(fn) {
  let timeout = null;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, 500)
  }
}

// 节流
function throttle(fn) {
  let flag = true;
  return function() {
    if(!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, arguments)
      flag = true;
    }, 500)
  }
}