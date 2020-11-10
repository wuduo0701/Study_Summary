/**
 * 二叉树的层序遍历
 */

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const t1 = new TreeNode(3);
const t2 = new TreeNode(9);
const t3 = new TreeNode(20);
const t4 = new TreeNode(15);
const t5 = new TreeNode(7);

t1.left = t2;
t1.right = t3;
t2.left = t4;
t2.right = t5;

function treeErgodic(root) {
  if(!root) return [];
  // 把二叉树模拟成队列，先进先出的特性
  const stack = [root];
  // 结果
  const result = [];
  
  while(stack.length > 0) {
    const temp = [];
    let len = stack.length;
    while(len) {
      const node = stack.shift();
      temp.push(node.val);
      if(node.left) stack.push(node.left);
      if(node.right) stack.push(node.right);
      len --;
    }
    result.push(temp);
  }
  return result;
}
console.log(treeErgodic(t1));

