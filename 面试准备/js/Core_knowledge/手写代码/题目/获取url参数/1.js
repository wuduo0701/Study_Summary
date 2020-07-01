function getParams(url) {
  let res = {};
  let subStr = url.substr(url.indexOf('?')+1).split('&');
  subStr.forEach(item => {
    let temp = item.split('=');
    res[temp[0]] = temp[1];
  })
  return res;
}

console.log(getParams("www.baidu.com?a=1&b=2"))