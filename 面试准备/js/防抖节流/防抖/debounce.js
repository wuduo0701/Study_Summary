function debounce(fn) {
  let timeout = null;
  return function(args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args)
    }, 500)  
  }
}