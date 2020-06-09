function debounce(fn) {
  let timeout = null; // 创建一个标记用来存放定时器的返回值
  return function() {
    clearTimeout(timeout);  //每当用户输入的时候把前一个 setTimeout清除掉
    timeout = setTimeout((args) => {  //然后又输入一个新的setTimeout，就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
      fn.apply(this, args);
    }, 500)
  }
}