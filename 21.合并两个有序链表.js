/*
 * @Author: zengzhe
 * @Date: 2023-03-16 17:09:04
 * @LastEditors: zengzhe
 * @LastEditTime: 2023-03-16 17:14:40
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(-1),
    p = dummy
  let p1 = list1,
    p2 = list2
  while (p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1
      p1 = p1.next
    } else {
      p.next = p2
      p2 = p2.next
    }
    p = p.next
  }
  if (p1 != null) {
    p.next = p1
  }
  if (p2 != null) {
    p.next = p2
  }
  return dummy.next
}
// @lc code=end
