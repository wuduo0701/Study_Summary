// 防抖
function debounce(fn) {
  let timeout = null; //设定时间
  return function() {
    clearTimeout(timeout);  //时间未到就清除
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    })
  }
}