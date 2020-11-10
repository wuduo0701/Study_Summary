/**
 * 二叉树镜像
 */
function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const t1 = new TreeNode(4);
const t2 = new TreeNode(2);
const t3 = new TreeNode(7);
const t4 = new TreeNode(1);
const t5 = new TreeNode(3);
const t6 = new TreeNode(6);
const t7 = new TreeNode(9);
t1.left = t2;
t1.right = t3;
t2.left = t4;
t2.right = t5;
t3.left = t6;
t3.right = t7;

// console.log(t1);

var mirrorTree = function(root) {
  if(!root) return null;
  let temp = mirrorTree(root.left);
  root.left = mirrorTree(root.right);
  root.right = temp;
  return root;
};

console.log((mirrorTree(t1)));