function getParams(url) {
  let result = {};
  // 截取出？后面的字符串，并且拆分开来变为数组
  let subStr = url.substr(url.indexOf('?')+1).split('&');
  subStr.forEach(item => {
    let temp = item.split('=');
    result[temp[0]] = temp[1];
  })
  return result;
}

console.log(getParams("www.baidu.com?a=1&b=2"))