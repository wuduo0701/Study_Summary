// 题目四： 把setTimeout改造成Promise的sleep函数

// // 函数签名
// function sleep(second)；

// // 实现10秒之后打印“10”
// sleep(5).then(i => { console.log(i)});

function sleep(second) {
  return new Promise(resolve => {
    setTimeout(resolve, second * 2000, '10');
  })
}

sleep(5).then(i => { console.log(i)});

// 考察了promise的使用
// 考察了setTimeout的使用

// setTimeout(function, delay, [...args])
// 第一个为回调函数，delay延迟的时间，传递的参数