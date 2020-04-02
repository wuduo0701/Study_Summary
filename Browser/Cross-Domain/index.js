// 封装jsonp函数
function jsonp({ url, params, callback}){
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    params = JSON.params(JSON.stringify(params));
    let arrs = [];
    for (let key in params){
      arrs.push(`${key}=${params[key]}`);
    }
    script.src = `${url}?${arrs.join('&')}`;
    script.src = `${url}?${arrs.join('&')}`;
    document.body.appendChild(script);
    window[callback] = function (data) {
        resolve(data);
        document.body.removeChild(script);
    }
  })
}
jsonp({
  url: 'http://localhost:3000/say',
  params: {
      wd: 'I Love you'
  },
  callback: 'show'
}).then(data => {
  console.log(data)
})