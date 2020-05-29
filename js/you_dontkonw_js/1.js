/**
 * LHS RHS 查找的区别
 * 栈空间和堆空间的区别
 * 作用域查找
 */

//会先找到o变量的声明
function chageObjProperty(o) {
  let a = o;
  o.siteUrl = "http://www.baidu.com";
  console.log(o.siteUrl)
  // 而这里又重新定义了o的堆空间
  o = new Object();
  let b = o;
  console.log(a === b)    //判断为false
  console.log(o)
  o.siteUrl = "http://www.google.com";
  console.log(o.siteUrl)
}

// 对象生成的是堆空间的引用，这里是website的引用
let webSite = new Object();
console.log(webSite)
//这里的website优先会在外层查找website的引用，而在前面已经定义
//函数里o.siteUrl = "http://www.baidu.com";又找到其值，就不会继续查找
chageObjProperty(webSite);
//所有这里查找的是第一个siteUrl的值
console.log(webSite.siteUrl); 