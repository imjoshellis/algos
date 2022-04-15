import { ListNode } from 'lib/types/ListNode'

export const solve = (h: ListNode): ListNode => {
  const seen = new Set()
  const start = new ListNode(null, h)
  let node = start
  while (node) {
    seen.add(node.val)
    while (node.next && seen.has(node.next.val)) {
      node.next = node.next.next
    }
    node = node.next
  }
  return start.next
}
