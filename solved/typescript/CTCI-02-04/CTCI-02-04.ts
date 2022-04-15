// https://leetcode.com/problems/partition-list/submissions/

import { ListNode } from 'lib/types/ListNode'

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
export const partition = (head: ListNode, x: number) => {
  const start = new ListNode(null, head)
  let fast = start
  let slow = start
  while (slow.next && slow.next.val < x) {
    slow = slow.next
  }
  fast = slow.next
  while (fast && fast.next) {
    if (fast.next.val < x) {
      const slowNextNext = slow.next
      slow.next = fast.next
      fast.next = fast.next.next
      slow.next.next = slowNextNext
      slow = slow.next
    } else {
      fast = fast.next
    }
  }
  return start.next
}
