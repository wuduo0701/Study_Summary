/**
 * 二叉树的前中后序遍历
 */

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
const t1 = new TreeNode(1);
const t2 = new TreeNode(2);
const t3 = new TreeNode(3);
t1.left = t2;
t1.right = t3;


function threeOrders( root ) {
  const pre = [], mid = [], end = [];
  if(root === null) return;

  function front(node) {
    if(node === null) return;
    pre.push(node.val);
    front(node.left);
    front(node.right);
  }

  function middle(node) {
    if(node === null) return;
    middle(node.left);
    mid.push(node.val);
    middle(node.right);
  }

  function End(node) {
    if(node === null) return;
    End(node.left);
    End(node.right);
    end.push(node.val);
  }
  
  front(root);
  middle(root);
  End(root);
  return [pre, mid, end];
}

console.log(threeOrders(t1));