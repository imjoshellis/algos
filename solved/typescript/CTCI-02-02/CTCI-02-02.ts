import { ListNode } from 'lib/types/ListNode'

export const solve = (h: ListNode, k: number): ListNode => {
  const start = new ListNode(null, h)
  let fast = start
  let slow = start
  for (let i = 0; i < k; i++) fast = fast.next
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  return slow
}
