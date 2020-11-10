/**
 * 二叉树根节点到所有子节点的路径之和
 * https://www.nowcoder.com/practice/185a87cd29eb42049132aed873273e83?tpId=190&&tqId=35580&rp=1&ru=/ta/job-code-high-rd&qru=/ta/job-code-high-rd/question-ranking
 * 
 */

function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
const t1 = new TreeNode(1);
const t2 = new TreeNode(2);
const t3 = new TreeNode(3);
t1.left = t2;
t1.right = t3;

var total = 0;
function sumNumbers( root ) {
  if(!root) return 0;
  fun(root, 0);
  return total
}

function fun(node, sum) {
  sum = sum * 10 + node.value;
  if(node.left) fun(node.left, sum);
  if(node.right) fun(node.right, sum);
  if(!node.left && !node.right) total += sum;
}
console.log(sumNumbers(t1));