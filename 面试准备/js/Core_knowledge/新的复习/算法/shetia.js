/**
 * 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
 */
// 栈 后进先出  队列 先进先出

// 模拟两个栈
function shetia() {
  this.stack1 = [];
  this.stack2 = [];
}

// 模拟队列的进队   后进的特性，直接插入栈的尾部
shetia.prototype.push = function(val) {
  this.stack1.push(val)
}

shetia.prototype.pop = function() {
  // 如果栈还有值，直接出栈的值
  if (this.stack2.length) return this.stack2.pop();

  while(this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }
  return this.stack2.pop() || -1;
}



// 栈像一个封闭的桶，先进后出，后进先出。  队列像一个管道，先进先出，后进后出

const stack1 = [], stack2 = [];   //stack1只能出栈，stack2只能入栈，这样来模拟队列的先进先出的效果

// 队列的进队效果，直接使用push，push会直接把数据置入队列后面，这样就变成了入队操作
function push(val) {
  stack1.push(val)
}

function pop() {
  // 如果出栈的栈中有值，先出栈置空
  if(stack2.length) return stack2.pop();
  // 现在轮到进栈的数据到出栈的地方

  while(stack1.length) {
    stack2.push(stack1.pop());
  }
  return stack2.pop() || -1;
}

