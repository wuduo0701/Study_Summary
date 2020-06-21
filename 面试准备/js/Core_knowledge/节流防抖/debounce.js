function debounce(fn) {
  let timeout = null;
  return function(args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(fn, ...args);
    }, 500)
  }
}