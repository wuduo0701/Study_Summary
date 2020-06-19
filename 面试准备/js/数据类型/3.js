// '1'.toString() 为什么可以调用？

var s = new Object('1');
s.toString();
s = null;