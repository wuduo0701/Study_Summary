/**
 * 输入一个链表，反转链表后，输出新链表的表头。
 * {1,2,3} => {3,2,1}
 */

function ListNode(x){
  this.val = x;
  this.next = null;
}
const l1 = new ListNode(1);
const l2 = new ListNode(2);
const l3 = new ListNode(3);
const l4 = new ListNode(4);
l1.next = l2;
l2.next = l3;
l3.next = l4;


function reserveList(head) {
  if (!head || !head.next) //链表为空或只有一个节点
    return head;
  let pre = null; //前驱节点
  while (head) {
    let next = head.next; //  保存后继节点
    head.next = pre; //反转了链表
    pre = head; //前驱节点变为当前节点
    head = next; //后继节点变成当前节点
  }
return pre;
}

console.log(reserveList(l1));