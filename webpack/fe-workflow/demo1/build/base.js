const Config = require('webpack-chain');
const config = new Config();  //负责webpack-chain的配置
const path = require('path');

const resolve = src =>{   //抽离成函数进行复用
  return path.join(process.cwd(), src)
}

//向外导出一个函数
module.exports = () => {  
  // console.log('在这里在基本配置');
  config
    .entry('app')     //entry入口的设置
    .add(resolve('src/main.js'))   //寻找物理路径
    .end()
    .set('mode', process.env.NODE_ENV)
    .output.path(resolve('dist'))
    .filename('[name].bundle.js')    //[]是一个变量
  
  return config;  
}